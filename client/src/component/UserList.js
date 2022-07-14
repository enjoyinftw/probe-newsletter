import React from 'react';

import UserItem from './UserItem';

const UserList = ({ items, handleNoteSubmit }) => {
  return (
    <>
      {items.map((item, index) => (
        <UserItem
          item={item}
          key={index}
          index={index}
          handleNoteSubmit={handleNoteSubmit}
        />
      ))}
    </>
  );
};

export default UserList;
