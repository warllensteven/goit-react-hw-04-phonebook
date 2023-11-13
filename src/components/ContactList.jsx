import React, { useEffect, useState } from 'react';
import ContactDelete from './ContactDelete';
import Filter from './Filter';

const ContactList = ({ contacts, onDeleteContact }) => {
  const [filter, setFilter] = useState('');

  const filterContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

    const handleFilterChange = (value) => {
    setFilter(value);
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <Filter onFilterChange={handleFilterChange} value={filter} onChange={(e) => setFilter(e.target.value)} />
      <ul>
        {filterContacts().map((contact) => (
          <ContactDelete key={contact.id} contact={contact} onDeleteContact={onDeleteContact} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;

