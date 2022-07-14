import React from 'react';

const ListItem = ({ item }) => {
  const keys = Object.keys(item);
  return (
    <div>
      <h2>{item[keys[0]]}</h2>
      <p>{item[keys[1]]}</p>
    </div>
  );
};

export default ListItem;
