import React, { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : [];
  });
  const [filter, setFilter] = useState('');

  const saveContactsToLocalStorage = (contacts) => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  };

  const addContact = (contact) => {
    const updatedContacts = [...contacts, contact];
    console.log('Updated Contacts:', updatedContacts);
    setContacts(updatedContacts);
    saveContactsToLocalStorage(updatedContacts);
  };

  const deleteContact = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    console.log('Updated Contacts:', updatedContacts);
    setContacts(updatedContacts);
    saveContactsToLocalStorage(updatedContacts);
  };

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  useEffect(() => {
    saveContactsToLocalStorage(contacts);
  }, [contacts]);

  return (
    <div>
      <h1>Contact Book</h1>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleFilterChange} />
      <ContactList contacts={contacts} onDeleteContact={deleteContact} />
    </div>
  );
};

export default App;

