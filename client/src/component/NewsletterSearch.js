import React, { useState } from 'react';

const NewsletterSearch = ({ searchterm, setSearchterm }) => {
  return (
    <>
      <label htmlFor='search'>Enter your searchterm:</label>
      <input
        placeholder='What are you looking for?'
        name='search'
        type='text'
        value={searchterm}
        onChange={(e) => setSearchterm(e.target.value)}
        aria-label='Your Name'
      />
    </>
  );
};

export default NewsletterSearch;
