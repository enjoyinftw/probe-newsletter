import { useState } from 'react';

const ListItem = ({ item, index, handleNoteSubmit }) => {
  const [note, setNote] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleNoteSubmit(note, index);
  };
  return (
    <div>
      <p>
        Username: {item.name} <br /> Email: {item.email}
      </p>
      {item.note && <span>Note: {item.note}</span>}
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor='note'>Enter your Note: </label>
        <input
          placeholder='Note'
          name='note'
          type='text'
          value={note}
          onChange={(e) => setNote(e.target.value)}
          aria-label='Your Usernote'
        />
        <button value='submit'>Submit</button>
      </form>
    </div>
  );
};

export default ListItem;
