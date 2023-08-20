import './styles.css';

export function InputTextArea({ onChange, id, placeholder, value }) {
  return (
    <textarea
      id={id}
      placeholder={placeholder}
      value={value}
      className="todo-form__input todo-form__textarea"
      onChange={onChange}
    />
  );
}
