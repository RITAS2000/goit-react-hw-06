import css from './Contact.module.css';
import { IoMdPerson } from 'react-icons/io';
import { AiFillPhone } from 'react-icons/ai';
export default function Contact({ name, phone, onClick }) {
  return (
    <div className={css.container}>
      <div className={css.textContainer}>
        <div className={css.iconAndText}>
          <IoMdPerson className={css.icon} /> <p className={css.text}>{name}</p>
        </div>
        <div className={css.iconAndText}>
          <AiFillPhone className={css.icon} />
          <p className={css.text}>{phone}</p>
        </div>
      </div>
      <button className={css.button} type="button" onClick={onClick}>
        Delete
      </button>
    </div>
  );
}
