import { useState } from 'react';
import './styles.css';

export const Timer = () => {
  const [isRunning, setisRunning] = useState(false);
  const [timer, setTimer] = useState(0);

  function handleStopStart() {
    setisRunning(!isRunning);
  }
  function handleRestart() {
    setTimer(0);
    setisRunning(false);
  }
  return (
    <div>
      <h1>Timer</h1>
      <p>{timer} sec</p>
      <button onClick={handleStopStart}>{isRunning ? 'Stop' : 'Start'}</button>
      <button onClick={handleRestart}>Restart</button>
    </div>
  );
};
