import './styles.css';
import { MasterHeader } from '../../../Components/MasterHeader';
import { Lable, Button, Output, Result, Tile } from './Components';
import { useState, useEffect } from 'react';

const MINUTE = 60000; //1 minuta w ms
const DURATIONS = [
  { label: '1 minuta', duration: MINUTE },
  { label: '2 minuty', duration: MINUTE * 2 },
  { label: '3 minuty', duration: MINUTE * 3 },
];

const MOLES = [
  { label: '1 kret', molesNo: 1, tiles: 10, timeVisible: 10000 },
  { label: '2 krety', molesNo: 2, tiles: 15, timeVisible: 500 },
  { label: '3 krety', molesNo: 3, tiles: 20, timeVisible: 350 },
];

export const HitTheMole = () => {
  const [duration, setDuration] = useState();
  const [molesNo, setMolesNo] = useState();
  const [status, setStatus] = useState('notStarted');
  const [timeLeft, setTimeLeft] = useState();
  const [score, setScore] = useState();
  const [showWarning, setShowWarning] = useState(false);
  const [tiles, setTiles] = useState([]);

  useEffect(() => {
    console.log('Status się zmienił', status);
    if (status === 'notStarted') {
      setTimeLeft(0);
    }
    if (status === 'started') {
      setTimeLeft(duration);
      setTiles(getInitialTiles(molesNo));
    }
    if (status !== 'finished') {
      setScore(0);
    }
  }, [status, duration, molesNo]);

  function getInitialTiles(molesNumber) {
    const tiles = MOLES.find((mole) => mole.molesNo === molesNumber).tiles;
    return Array(tiles).fill(0);
  }

  function formatTime(time) {
    const timeInSeconds = Math.round(time / 1000);
    const timeInMinutes = Math.round(timeInSeconds / 60)
      .toString()
      .padStart(2, '0');
    const seconds = Math.round(timeInSeconds % 60)
      .toString()
      .padStart(2, '0');
    return `${timeInMinutes}:${seconds}`;
  }

  function settingsValidation() {
    if (duration > 0 && molesNo > 0) {
      return false;
    } else {
      return true;
    }
  }

  function handleStart() {
    const validation = settingsValidation();
    if (validation === false) {
      setStatus('started');
      setShowWarning(false);
    } else {
      setShowWarning(true);
    }
  }
  return (
    <div>
      <MasterHeader value="Kret" />
      <p>
        Gra polegająca na podążaniu za krecikiem i trafieniu na kwadrat, w
        którym się pojawił.{' '}
      </p>
      {showWarning && <p className="mole-warning">Brakuje ustawień gry</p>}
      {status === 'finished' && (
        <Result duration={formatTime(duration)} score={score} />
      )}
      <p>
        {' '}
        duration: {duration}, Moles Number: {molesNo}, Status: {status},
        timeLeft:{timeLeft}, Tiles: {JSON.stringify(tiles)}
      </p>
      {status !== 'started' && (
        <>
          {' '}
          <div className="time-buttons">
            <Lable value="Czas Gry" />
            {DURATIONS.map((item) => (
              <Button
                key={item.label}
                value={item.label}
                onClick={() => setDuration(item.duration)}
                variant={item.duration !== duration ? 'primary' : 'secondary'}
              />
            ))}
          </div>
          <div className="moles-buttons">
            <Lable value="Liczba kretów" />
            {MOLES.map((item) => (
              <Button
                key={item.label}
                value={item.label}
                variant={item.molesNo !== molesNo ? 'primary' : 'secondary'}
                onClick={() => {
                  setMolesNo(item.molesNo);
                }}
              />
            ))}
          </div>
          <div>
            <Lable value="PRZYCISKI STERUJĄCE" />
            <Button value={'START'} onClick={handleStart} />
          </div>
        </>
      )}
      {status === 'started' && (
        <>
          <div>
            <Lable value="CZAS DO KOŃCA" />
            <Output value={formatTime(timeLeft)} />
          </div>
          <div>
            <Lable value="WYNIK" />
            <Output value={score} />
          </div>
          <div>
            <Lable value="PRZYCISKI STERUJĄCE" />
            <Button
              value={'STOP'}
              onClick={() => setStatus('notStarted')}
              variant="tertiary"
            />
          </div>
          <div>
            <Tile hasMole />
            <Tile hasMole />
            <Tile hasMole />
            <Tile hasMole variant="correct" />
            <Tile hasMole variant="incorrect" />
            <Tile hasMole variant="neutral" />
          </div>
        </>
      )}
    </div>
  );
};
