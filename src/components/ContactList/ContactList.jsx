import Contact from '../Contact/Contact.jsx';
import css from './ContactList.module.css';

export default function ContactList() {
  return (
    <ul className={css.container}>
      <Contact />
    </ul>
  );
}
