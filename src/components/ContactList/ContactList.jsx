import Contact from '../Contact/Contact.jsx';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice.js';
import { selectFilters } from '../../redux/filtersSlice.js';
import { useDebounce } from 'use-debounce';

export default function ContactList() {
  // const contacts = useSelector((state) => state.contacts.items);
  const contacts = useSelector(selectContacts);
  // const filter = useSelector((state) => state.filters.enter);
  const filter = useSelector(selectFilters);
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
        />
      ))}
    </ul>
  );
}
