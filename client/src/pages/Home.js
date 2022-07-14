import React, { useState } from 'react';
import Newsletter from './Newsletter';
import Checkbox from '../component/Checkbox';
import SignupForm from '../component/SignupForm';
import Email from './Email';

const Home = () => {
  const [users, setUsers] = useState([]);
  const [checkOne, setCheckOne] = useState(true);
  const [checkTwo, setCheckTwo] = useState(false);

  const handleCheckbox = () => {
    setCheckOne(!checkOne);
    setCheckTwo(!checkTwo);
  };
  const handleSignupSubmit = (name, email) => {
    const newUser = { name: name, email: email };
    setUsers([...users, newUser]);
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
