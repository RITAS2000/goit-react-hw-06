import css from './ContactForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { AiFillPhone } from 'react-icons/ai';
import { IoMdPerson } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice.js';
import { addContact } from '../../redux/contactsSlice.js';
import { nanoid } from 'nanoid';

const initialValues = {
  name: '',
  number: '',
};

const ContactFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, 'Phone must be in format 123-45-67')
    .required('Required'),
});

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (values, actions) => {
    const isDubl = contacts.some(
      (contact) =>
        contact.name.toLowerCase() === values.name.toLowerCase() ||
        contact.number === values.number,
    );

    if (isDubl) {
      const haveContact = window.confirm(
        `A contact with this name or number already exists. Do you want to add another one?`,
      );
      if (haveContact) {
        dispatch(
          addContact({
            id: nanoid(),
            name: values.name,
            number: values.number,
          }),
        );
      }
      actions.resetForm();
      return;
    }

    dispatch(
      addContact({
        id: nanoid(),
        name: values.name,
        number: values.number,
      }),
    );
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactFormSchema}
    >
      <Form className={css.container}>
        <label className={css.label}>
          Name
          <IoMdPerson className={css.icon} />
          <Field className={css.input} type="text" name="name" />
          <ErrorMessage
            className={css.spunstyle}
            name="name"
            component="span"
          />
        </label>
        <label className={css.label}>
          Number
          <AiFillPhone className={css.icon} />
          <Field className={css.input} type="tel" name="number" />
          <ErrorMessage
            className={css.spunstyle}
            name="number"
            component="span"
          />
        </label>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
