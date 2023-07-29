import { useEffect, useState } from 'react';
import './styles.css';

export const SetTimeout = () => {
  const [value, setValue] = useState(0);

  const [progress, setProgress] = useState(10);
  const [otherValue, setOtherValue] = useState(0);
  const [intervalId, setSetIntervalId] = useState(0);

  function handleOnClick() {
    setValue(value + 10);
  }

  useEffect(() => {
    console.log('Jestem funkcją effectCallback');
    const id = setTimeout(() => {
      console.log('Zwiększam rozmiar Progress Bar', value);
      setProgress(value);
    }, 2000);

    return () => clearTimeout(id);
  }, [value, progress]);

  function handleToggleIncrement() {
    const id = setInterval(() => {
      console.log('Other value', otherValue);
      setOtherValue((currentOtherValue) => currentOtherValue + 10);
    }, 1000);
    setSetIntervalId(id);
  }
  useEffect(() => {
    return () => clearInterval(intervalId);
  }, [intervalId]);

  return (
    <div>
      <h1>useEffect, setTimeout, setInteraval</h1>
      <p>Value = {value}</p>
      <button onClick={handleOnClick}>Increment Value</button>
      <div style={{ backgroundColor: 'red', width: progress }}>.</div>
      <button onClick={handleToggleIncrement}>Dodawaj</button>
      <p>Other value = {otherValue}</p>
    </div>
  );
};
