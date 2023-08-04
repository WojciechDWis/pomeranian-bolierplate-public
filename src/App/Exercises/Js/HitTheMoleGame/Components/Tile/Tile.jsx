import './styles.css';

export const Tile = ({ hasMole, variant = 'neutral', onClick }) => {
  // eslint-disable-next-line prettier/prettier

  if (
    !(variant === 'correct' || variant === 'incorrect' || variant === 'neutral')
  )
    console.warn('tile: błędny parametr variant', variant);
  let moleClass = '';
  if (hasMole) moleClass = 'mole-tile--has-mole';
  return (
    <button
      className={`mole-tile mole-tile--${variant} ${moleClass}`}
      onClick={onClick}
    />
  );
};
