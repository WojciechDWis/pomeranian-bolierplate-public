import './styles.css';

export const Result = ({ children }) => {
  // eslint-disable-next-line prettier/prettier
  return (
    <span className="memo-result">
      {children}
    </span>
  );
};
