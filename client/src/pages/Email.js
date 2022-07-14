import { useState, useEffect } from 'react';
import UserList from '../component/UserList';
import SearchInput from '../component/SearchInput';

const Email = ({ users, handleNoteSubmit }) => {
  const [userList, setUserList] = useState(users);
  const [searchterm, setSearchterm] = useState('');

  useEffect(() => {
    const newUsers = users.filter(
      (user) =>
        user.name.toLowerCase().includes(searchterm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchterm.toLowerCase())
    );
    setUserList(newUsers);
  }, [searchterm]);

  return (
    <div>
      <SearchInput searchterm={searchterm} setSearchterm={setSearchterm} />
      {userList.length ? (
        <UserList items={userList} handleNoteSubmit={handleNoteSubmit} />
      ) : (
        <h1>No User</h1>
      )}
    </div>
  );
};

export default Email;
