import Contact from '../Contact/Contact.jsx';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice.js';
import { useDebounce } from 'use-debounce';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.enter);
  const [debouncedFilter] = useDebounce(filter, 300);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(debouncedFilter.toLowerCase()),
  );

  return (
    <ul className={css.container}>
      {filteredContacts.map((contact) => (
        <Contact
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          // onDelete={() => dispatch(deleteContact(contact.id))}
          onDelete={() => {
            const confirmed = window.confirm(
              `Are you sure you want to delete ${contact.name}?`,
            );
            if (confirmed) {
              dispatch(deleteContact(contact.id));
            }
          }}
        />
      ))}
    </ul>
  );
}
