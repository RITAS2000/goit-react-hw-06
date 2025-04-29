import css from './Contact.module.css';
import { IoMdPerson } from 'react-icons/io';
import { AiFillPhone } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice.js';
import { useDebounce } from 'use-debounce';

export default function Contact() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.enter);
  const [debouncedFilter] = useDebounce(filter, 300);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(debouncedFilter.toLowerCase()),
  );

  if (!contacts) return null;

  return (
    <>
      {filteredContacts.map((contact) => (
        <li key={contact.id}>
          <div className={css.container}>
            <div className={css.textContainer}>
              <div className={css.iconAndText}>
                <IoMdPerson className={css.icon} />{' '}
                <p className={css.text}>{contact.name}</p>
              </div>
              <div className={css.iconAndText}>
                <AiFillPhone className={css.icon} />
                <p className={css.text}>{contact.number}</p>
              </div>
            </div>
            <button
              className={css.button}
              type="button"
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </>
  );
}
