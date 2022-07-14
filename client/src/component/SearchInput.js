import React from 'react';

const SearchInput = ({
  searchterm,
  setSearchterm,
  placeholder = 'What are you looking for?',
  label = 'Enter your searchterm:',
}) => {
  return (
    <>
      <label htmlFor='search'>{label}</label>
      <input
        placeholder={placeholder}
        name='search'
        type='text'
        value={searchterm}
        onChange={(e) => setSearchterm(e.target.value)}
        aria-label='Your Name'
      />
    </>
  );
};

export default SearchInput;
