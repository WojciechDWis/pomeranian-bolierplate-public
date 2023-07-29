import { useEffect, useState } from 'react';
import './styles.css';

export const SetTimeout = () => {
  const [value, setValue] = useState(0);
  console.log('Pierwsza wiadomość', value);

  function handleOnClick() {
    setValue(value + 1);
  }

  function effectCallback() {
    console.log('Jestem funkcją effectCallback');
    setValue(value + 1);
  }
  useEffect(effectCallback, []);

  return (
    <div>
      <h1>useEffect, setTimeout, setInteraval</h1>
      <p>Value = {value}</p>
      <button onClick={handleOnClick}>Increment Value</button>
      <div style={{ backgroundColor: 'red', width: '100px' }}></div>
    </div>
  );
};
