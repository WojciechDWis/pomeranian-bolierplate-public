import './styles.css';

export const Tile = ({ hasMemo, variant = 'neutral', onClick, value }) => {
  // eslint-disable-next-line prettier/prettier

  if (
    !(variant === 'correct' || variant === 'incorrect' || variant === 'neutral')
  )
    console.warn('tile: błędny parametr variant', variant);
  let memoClass = '';
  if (hasMemo) memoClass = 'memo-tile--has-memo';
  return (
    <button
      className={`memo-tile memo-tile--${variant} ${memoClass}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};
