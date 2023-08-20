import './styles.css';

export function Input({ onChange, value, placeholder, id }) {
  return (
    <input
      type="text"
      className="todo-form__input"
      id={id}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}
