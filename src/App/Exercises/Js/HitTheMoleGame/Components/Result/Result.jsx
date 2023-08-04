import './styles.css';

export const Result = ({ score = 0, duration = 0 }) => {
  // eslint-disable-next-line prettier/prettier
  return (
    <span className="mole-result">
      {`Gratulację! Twój wynik to ${score} złapane krety w czasie ${duration} minut!`}
    </span>
  );
};
