import { useState } from 'react';

const SignupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSignupSubmit = () => {};

  return (
    <div className='signupbox'>
      <h1>Newsletter Signup</h1>
      <form onSubmit={handleSignupSubmit}>
        <label for='name'>Enter your Name:</label>
        <input
          placeholder='Your Name'
          name='name'
          type='text'
          value={name}
          onChange={(e) => handleNameChange(e)}
          aria-label='Your Name'
        />
        <label for='email'>Enter your Email:</label>
        <input
          placeholder='Your E-Mail'
          type='text'
          value={email}
          onChange={(e) => handleEmailChange(e)}
          aria-label='Your Name'
        />
      </form>
    </div>
  );
};

export default SignupForm;
