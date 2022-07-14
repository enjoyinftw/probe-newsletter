import React from 'react';

import ListItem from './ListItem';

const List = ({ items }) => {
  return (
    <>
      {items.map((item, index) => (
        <ListItem item={item} key={index} />
      ))}
    </>
  );
};

export default List;
