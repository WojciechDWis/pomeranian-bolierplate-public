import './styles.css';

export const Button = ({ value, variant = 'primary', onClick }) => {
  // eslint-disable-next-line prettier/prettier

  if (
    !(
      variant === 'primary' ||
      variant === 'secondary' ||
      variant === 'tertiary'
    )
  )
    console.warn('Button: błędny parametr variant', variant);
  return (
    <button className={`memo-button memo-button--${variant}`} onClick={onClick}>
      {value}
    </button>
  );
};
