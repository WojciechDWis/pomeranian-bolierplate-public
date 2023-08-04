import './styles.css';

export const Output = ({ value }) => {
  // eslint-disable-next-line prettier/prettier
  return (
    <span className="mole-output">{value}</span>
  );
};
