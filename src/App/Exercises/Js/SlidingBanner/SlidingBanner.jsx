import './styles.css';
import { useEffect, useState } from 'react';

export const SlidingBanner = () => {
  const defaultText = 'I Love JS';
  const [isRunning, setisRunning] = useState(false);
  const [text, setText] = useState(defaultText);

  function handleStart() {
    setisRunning(!isRunning);
  }
  function handleReset() {
    setisRunning(false);
    setText(defaultText);
  }

  useEffect(() => {
    if (!isRunning) return;
    const id = setInterval(() => {
      setText((currentText) => {
        const tablica = [...currentText];
        const firstCharacter = tablica.shift();
        tablica.push(firstCharacter);
        return tablica.join('');
      });
    }, 200);
    return () => clearInterval(id);
  }, [isRunning]);

  return (
    <div>
      <h1>Przesuwany baner</h1>
      <p>
        <img
          src="https://i.postimg.cc/vHFNx9MC/2023-05-11-16-
48-30.gif"
          alt="przykład"
          width={400}
        />
      </p>
      <button onClick={handleStart}>{isRunning ? 'Stop' : 'Start'}</button>
      <button onClick={handleReset}>Restart</button>
      <p>
        <span style={{ backgroundColor: 'red' }}>{text}</span>
      </p>
    </div>
  );
};
