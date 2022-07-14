import { useState, useEffect } from 'react';
import SignupForm from '../component/SignupForm';
import NewsletterList from '../component/NewsletterList';
import { newsletterData } from '../data/newsletter-data';
import NewsletterSearch from '../component/NewsletterSearch';

const Newsletter = () => {
  const [users, setUsers] = useState([]);
  const [newsletters, setNewsletters] = useState(newsletterData);
  const [searchterm, setSearchterm] = useState('');
  const [user, setUser] = useState({
    name: null,
    email: null,
  });

  useEffect(() => {
    const newNewsletters = newsletterData.filter(
      (newsletter) =>
        newsletter.name
          .toLowerCase()
          .includes(searchterm.toLocaleLowerCase()) ||
        newsletter.description
          .toLowerCase()
          .includes(searchterm.toLocaleLowerCase())
    );
    setNewsletters(newNewsletters);
  }, [searchterm]);

  const handleSignupSubmit = (name, email) => {
    console.log(name, email);
  };
  return (
    <div>
      <SignupForm handleSignupSubmit={handleSignupSubmit} />
      <NewsletterSearch searchterm={searchterm} setSearchterm={setSearchterm} />
      <NewsletterList newsletters={newsletters} />
    </div>
  );
};

export default Newsletter;
