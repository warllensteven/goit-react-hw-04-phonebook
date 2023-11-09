import React, { useEffect } from 'react';
import ContactDelete from './ContactDelete';

const ContactList = ({ contacts, onDeleteContact }) => {
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <ul>
      {contacts.map((contact) => (
        <ContactDelete key={contact.id} contact={contact} onDeleteContact={onDeleteContact} />
      ))}
    </ul>
  );
};

export default ContactList;

