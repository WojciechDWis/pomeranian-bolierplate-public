import { useEffect, useState } from 'react';
import './styles.css';

export const SetTimeout = () => {
  const [value, setValue] = useState(0);

  const [progress, setProgress] = useState(10);

  function handleOnClick() {
    setValue(value + 10);
  }

  useEffect(() => {
    console.log('Jestem funkcją effectCallback');
    setTimeout(() => {
      console.log('Zwiększam rozmiar Progress Bar', value);
      setProgress(value);
    }, 5000);
    setProgress(value);
  }, [value]);

  return (
    <div>
      <h1>useEffect, setTimeout, setInteraval</h1>
      <p>Value = {value}</p>
      <button onClick={handleOnClick}>Increment Value</button>
      <div style={{ backgroundColor: 'red', width: progress }}>.</div>
    </div>
  );
};
