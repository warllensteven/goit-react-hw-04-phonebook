import React, { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';


const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : [];
  });
  const [filter] = useState('');

  const saveContactsToLocalStorage = (contacts) => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  };

  const addContact = (contact) => {
    const updatedContacts = [...contacts, contact];
    setContacts(updatedContacts);
    saveContactsToLocalStorage(updatedContacts);
  };

  const deleteContact = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
    saveContactsToLocalStorage(updatedContacts);
  };


  useEffect(() => {
    saveContactsToLocalStorage(contacts);
  }, [contacts]);

  return (
    <div>
      <h1>Contact Book</h1>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      <ContactList contacts={contacts} filter={filter} onDeleteContact={deleteContact} />
    </div>
  );
};

export default App;


