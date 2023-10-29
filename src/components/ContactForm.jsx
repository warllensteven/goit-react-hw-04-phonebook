import React, { useState } from 'react';
import './styles.css';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ id: Date.now(), name, number });
    setName('');
    setNumber('');
  };

  return (
    <div className="form-container">
       <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <label>
        Number:
        <input type="tel" value={number} onChange={(e) => setNumber(e.target.value)} required />
      </label>
      <button type="submit">Add Contact</button>
      </div>
    </form>
    </div>
  );
};

export default ContactForm;
