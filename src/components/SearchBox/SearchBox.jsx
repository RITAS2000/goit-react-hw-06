import css from './SearchBox.module.css';

export default function SearchBox({ value, onChange }) {
  return (
    <div className={css.container}>
      <label className={css.label}>
        Find contact by name
        <input
          className={css.input}
          type="text"
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
}
