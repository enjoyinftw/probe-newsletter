import { useState, useEffect } from 'react';
import List from '../component/List';
import { newsletterData } from '../data/newsletter-data';
import SearchInput from '../component/SearchInput';

const Newsletter = () => {
  const [newsletters, setNewsletters] = useState(newsletterData);
  const [searchterm, setSearchterm] = useState('');

  useEffect(() => {
    const newNewsletters = newsletterData.filter(
      (newsletter) =>
        newsletter.name.toLowerCase().includes(searchterm.toLowerCase()) ||
        newsletter.description.toLowerCase().includes(searchterm.toLowerCase())
    );
    setNewsletters(newNewsletters);
  }, [searchterm]);

  return (
    <div>
      <SearchInput searchterm={searchterm} setSearchterm={setSearchterm} />
      <List items={newsletters} />
    </div>
  );
};

export default Newsletter;
