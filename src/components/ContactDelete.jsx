import React from 'react';

const ContactDelete = ({ contact, onDeleteContact }) => {
  const { id, name, number } = contact;

  return (
    <li>
      {name}: {number} <button onClick={() => onDeleteContact(id)}>Delete</button>
    </li>
  );
};

export default ContactDelete;