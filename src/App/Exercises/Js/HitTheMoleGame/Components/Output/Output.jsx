import './styles.css';

export const Output = ({ children }) => {
  // eslint-disable-next-line prettier/prettier
  return (
    <span className="mole-output">{children}</span>
  );
};
