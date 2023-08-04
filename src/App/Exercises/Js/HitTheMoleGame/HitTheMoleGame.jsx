import './styles.css';
import { MasterHeader } from '../../../Components/MasterHeader';
import { Lable, Button, Output, Result, Tile } from './Components';
import { useState, useEffect } from 'react';
import { formatTime } from './Utils';
import { getNewMolePosition } from './Utils';

const MINUTE = 6000; //1 minuta w ms
const HIGHLIGHT_TIME = 500;
const DURATIONS = [
  { label: '1 minuta', duration: MINUTE + 100 },
  { label: '2 minuty', duration: MINUTE * 2 + 100 },
  { label: '3 minuty', duration: MINUTE * 3 + 100 },
];

const MOLES = [
  { label: '1 kret', molesNo: 1, tiles: 10, timeVisible: 10000 },
  { label: '2 krety', molesNo: 2, tiles: 15, timeVisible: 500 },
  { label: '3 krety', molesNo: 3, tiles: 20, timeVisible: 350 },
];

export const HitTheMole = () => {
  const [duration, setDuration] = useState();
  const [prevDuration, setPrevDuration] = useState();
  const [molesOption, setMolesOption] = useState();
  const [molePosition, setMolePosition] = useState();
  const [status, setStatus] = useState('notStarted');
  const [timeLeft, setTimeLeft] = useState();
  const [score, setScore] = useState();
  const [showWarning, setShowWarning] = useState(false);
  const [tiles, setTiles] = useState([]);
  const [intervalId, setIntervalId] = useState();
  const [correct, setCorrect] = useState();
  const [incorrect, setIncorrect] = useState();

  function startCountdown() {
    const id = setInterval(() => setTimeLeft((prev) => prev - 100), 100);
    setIntervalId(id);
  }

  useEffect(() => {
    if (timeLeft <= 0) {
      clearInterval(intervalId);
      setStatus('finished');
      setDuration(undefined);
      setMolesOption(undefined);
    }
  }, [intervalId, timeLeft]);

  useEffect(() => {
    if (molePosition === undefined) return;
    let timeoutId;
    //console.timeEnd('mole-position');
    //console.time('mole-position');
    if (molePosition !== undefined) {
      timeoutId = setTimeout(
        () =>
          setMolePosition(getNewMolePosition(molePosition, molesOption.tiles)),
        molePosition.timeVisible
      );
    }
    return () => clearTimeout(timeoutId);
  }, [molePosition, molesOption]);

  useEffect(() => {
    let timeoutId;
    if (correct !== undefined) {
      timeoutId = setTimeout(() => setCorrect(undefined), HIGHLIGHT_TIME);
    }
    return () => clearTimeout(timeoutId);
  }, [correct]);

  useEffect(() => {
    let timeoutId;
    if (incorrect !== undefined) {
      timeoutId = setTimeout(() => setIncorrect(undefined), HIGHLIGHT_TIME);
    }
    return () => clearTimeout(timeoutId);
  }, [incorrect]);

  function getInitialTiles(molesOption) {
    return Array(molesOption.tiles)
      .fill(0)
      .map((tile, index) => ({ index }));
  }

  function handleStart() {
    if (duration && molesOption) {
      setStatus('started');
      setShowWarning(false);
      setTimeLeft(duration);
      setPrevDuration(duration);
      setTiles(getInitialTiles(molesOption));
      setScore(0);
      startCountdown();
      setMolePosition(getNewMolePosition(molePosition, molesOption.tiles));
    } else {
      setShowWarning(true);
    }
  }

  function handleStop() {
    setStatus('notStarted');
    clearInterval(intervalId);
    setDuration(undefined);
    setMolesOption(undefined);
  }

  function handleTileClick(index) {
    if (molePosition === index) {
      setScore((prev) => prev + 1);
      setCorrect(index);
      setMolePosition(getNewMolePosition(index, molesOption.tiles));
    } else {
      setIncorrect(index);
      setScore((prev) => prev - 1);
    }
  }

  function getTileVariant(index) {
    if (index === correct) return 'correct';
    if (index === incorrect) return 'incorrect';
    return 'neutral';
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
        <Result duration={formatTime(prevDuration)} score={score} />
      )}
      <p>
        {' '}
        duration: {duration}, Moles Number: {molesOption && molesOption.molesNo}
        , Status: {status}, timeLeft:{timeLeft}, Tiles: {JSON.stringify(tiles)}
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
                variant={
                  molesOption &&
                  (item.molesNo !== molesOption.molesNo
                    ? 'primary'
                    : 'secondary')
                }
                onClick={() => {
                  setMolesOption(item);
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
            <Button value={'STOP'} onClick={handleStop} variant="tertiary" />
          </div>
          <div>
            {status === 'started' && (
              <div className="mole-board">
                {tiles.map(({ index }) => (
                  <Tile
                    key={index}
                    onClick={() => handleTileClick(index)}
                    hasMole={index === molePosition}
                    variant={getTileVariant(index)}
                  />
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};
