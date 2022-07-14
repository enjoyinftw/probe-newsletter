import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Newsletter from './Newsletter';
import Checkbox from '../component/Checkbox';
import SignupForm from '../component/SignupForm';
import Email from './Email';

const Home = () => {
  const [users, setUsers] = useState([]);
  const [checkOne, setCheckOne] = useState(true);
  const [checkTwo, setCheckTwo] = useState(false);
  const [submitCounter, setSubmitCounter] = useState(0);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(
          'http://localhost:5000/api/v1/findall',
          {
            withCredentials: true,
            credentials: 'include',
          }
        );
        if (data.isFound) {
          setUsers(data.userData);
        }
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, [submitCounter]);

  const handleCheckbox = () => {
    setCheckOne(!checkOne);
    setCheckTwo(!checkTwo);
  };
  const handleSignupSubmit = (name, email) => {
    const newUser = { name: name, email: email };
    try {
      const { data } = axios.post(
        'http://localhost:5000/api/v1/create',
        newUser,
        {
          withCredentials: true,
          credentials: 'include',
        }
      );
      console.log(data);
      setSubmitCounter(submitCounter + 1);
    } catch (e) {
      console.log(e);
    }
  };

  const handleNoteSubmit = (note, index) => {
    let newUsers = [...users];
    let [editUser] = newUsers.splice(index, 1);
    editUser = { ...editUser, note: note };
    newUsers.splice(index, 0, editUser);
    setUsers([...newUsers]);
  };

  return (
    <>
      <div>
        <Checkbox
          label='Newsletters'
          value={checkOne}
          onChange={handleCheckbox}
        />
        <Checkbox label='Emails' value={checkTwo} onChange={handleCheckbox} />
      </div>

      <div>
        {checkOne ? (
          <>
            <SignupForm handleSignupSubmit={handleSignupSubmit} />
            <br />
            <Newsletter />
          </>
        ) : (
          <Email users={users} handleNoteSubmit={handleNoteSubmit} />
        )}
      </div>
    </>
  );
};

export default Home;
