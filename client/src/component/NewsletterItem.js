import React from 'react';

const NewsletterItem = ({ newsletter }) => {
  return (
    <div>
      <h2>{newsletter.name}</h2>
      <p>{newsletter.description}</p>
    </div>
  );
};

export default NewsletterItem;
