import css from './Contact.module.css';
import { IoMdPerson } from 'react-icons/io';
import { AiFillPhone } from 'react-icons/ai';

export default function Contact({ onDelete, id, name, number }) {
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
            onClick={() => onDelete(id)}
          >
            Delete
          </button>
        </div>
      </li>
    </>
  );
}
