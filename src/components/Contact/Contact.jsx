import css from './Contact.module.css';
import { IoMdPerson } from 'react-icons/io';
import { AiFillPhone } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice.js';

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();
  return (
    <>
      <li key={id} className={css.flyIn}>
        <div className={css.container}>
          <div className={css.textContainer}>
            <div className={css.iconAndText}>
              <IoMdPerson className={css.icon} />{' '}
              <p className={css.text}>{name}</p>
            </div>
            <div className={css.iconAndText}>
              <AiFillPhone className={css.icon} />
              <p className={css.text}>{number}</p>
            </div>
          </div>
          <button
            className={css.button}
            type="button"
            // onClick={() => dispatch(deleteContact(contact.id))}
            onClick={() => {
              const confirmed = window.confirm(
                `Are you sure you want to delete ${name}?`,
              );
              if (confirmed) {
                dispatch(deleteContact(id));
              }
            }}
          >
            Delete
          </button>
        </div>
      </li>
    </>
  );
}
