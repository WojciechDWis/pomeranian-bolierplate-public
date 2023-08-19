import './styles.css';

export const Button = ({ children, variant = 'primary', onClick, ...rest }) => {
  return (
    <button
      className={`todo-btn todo-btn--${variant}`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};
