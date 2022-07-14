import { useState, useEffect } from 'react';
import UserList from '../component/UserList';
import SearchInput from '../component/SearchInput';
import axios from 'axios';

const Email = ({ users, handleNoteSubmit }) => {
  const [userList, setUserList] = useState(users);
  const [submitCounter, setSubmitCounter] = useState(0);
  const [searchterm, setSearchterm] = useState('');

  useEffect(() => {}, [submitCounter]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSubmitCounter(submitCounter + 1);
  };

  return (
    <div>
      <br />
      <form onSubmit={(e) => handleSearchSubmit(e)}>
        <SearchInput
          searchterm={searchterm}
          setSearchterm={setSearchterm}
          label={'Enter a name:'}
          placeholder={'username'}
        />
        <button value='submit'>Search</button>
      </form>
      {userList.length ? (
        <UserList items={userList} handleNoteSubmit={handleNoteSubmit} />
      ) : (
        <h1>No User</h1>
      )}
    </div>
  );
};

export default Email;
