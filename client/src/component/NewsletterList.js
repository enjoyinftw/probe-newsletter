import { useState } from 'react';

import NewsletterItem from './NewsletterItem';

const NewsletterList = ({ newsletters }) => {
  return (
    <>
      {newsletters.map((newsletter, index) => (
        <NewsletterItem newsletter={newsletter} key={index} />
      ))}
    </>
  );
};

export default NewsletterList;
