import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactList from '../ContactList/ContactList.jsx';
import SearchBox from '../SearchBox/SearchBox.jsx';
import ContactForm from '../ContactForm/ContactForm.jsx';
import css from './App.module.css';

export default function App() {
  const getContacts = () => {
    const saved = localStorage.getItem('contacts');
    return saved
      ? JSON.parse(saved)
      : [
          { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
          { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
          { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
          { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ];
  };

  const [contacts, setContacts] = useState(getContacts);

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleDeleteContact = (id) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };

  const handleChange = (evt) => {
    const value = evt.target.value;
    setFilter(value);
  };

  const handleAddContact = (newContact) => {
    const contactWithId = {
      id: nanoid(),
      ...newContact,
    };
    setContacts((prev) => [...prev, contactWithId]);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <div>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onAdd={handleAddContact} />
      <SearchBox value={filter} onChange={handleChange} />
      <ContactList contacts={filteredContacts} onDelete={handleDeleteContact} />
    </div>
  );
}
