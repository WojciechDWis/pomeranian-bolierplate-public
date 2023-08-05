import './styles.css';
import { MasterHeader } from '../../../Components/MasterHeader';
import { Lable, Button, Output, Result } from './Components';
import { useState } from 'react';
import { formatTime } from './Utils';
import { GameBoard } from './Features/GameBoard/GameBoard';
import { MoleTimer } from './Features/MoleTimer';

const MINUTE = 6000; //1 minuta w ms

const DURATIONS = [
  { label: '1 minuta', duration: MINUTE + 100 },
  { label: '2 minuty', duration: MINUTE * 2 + 100 },
  { label: '3 minuty', duration: MINUTE * 3 + 100 },
];

const MOLES = [
  { label: '1 kret', molesNo: 1, tiles: 10, timeVisible: 1000 },
  { label: '2 krety', molesNo: 2, tiles: 15, timeVisible: 2000 },
  { label: '3 krety', molesNo: 3, tiles: 20, timeVisible: 2500 },
];

export const HitTheMole = () => {
  console.log('Hit the mole game component rendered');
  const [duration, setDuration] = useState();
  const [prevDuration, setPrevDuration] = useState();
  const [molesOption, setMolesOption] = useState();

  const [status, setStatus] = useState('notStarted');

  const [score, setScore] = useState();
  const [showWarning, setShowWarning] = useState(false);
  const [tiles, setTiles] = useState([]);

  function getInitialTiles(molesOption) {
    return Array(molesOption.tiles)
      .fill(0)
      .map((tile, index) => ({ index }));
  }

  function handleStart() {
    if (duration && molesOption) {
      setStatus('started');
      setShowWarning(false);
      setPrevDuration(duration);
      setTiles(getInitialTiles(molesOption));
      setScore(0);
    } else {
      setShowWarning(true);
    }
  }

  function handleStop() {
    setStatus('notStarted');
    setDuration(undefined);
    setMolesOption(undefined);
  }

  function handleFinished() {
    setStatus('finished');
    setDuration(undefined);
    setMolesOption(undefined);
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
      {/* <p>
        {' '}
        duration: {duration}, Moles Number: {molesOption && molesOption.molesNo}
        , Status: {status}, timeLeft:{ }, Tiles: {JSON.stringify(tiles)}
      </p> */}
      {status !== 'started' && (
        <>
          {' '}
          <div className="time-buttons">
            <Lable>Czas Gry</Lable>
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
            <Lable>Liczba kretów</Lable>
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
            <Lable>PRZYCISKI STERUJĄCE</Lable>
            <Button value={'START'} onClick={handleStart} />
          </div>
        </>
      )}
      {status === 'started' && (
        <>
          <div>
            <Lable>CZAS DO KOŃCA</Lable>
            <Output>
              <MoleTimer duration={duration} handleFinished={handleFinished} />
            </Output>
          </div>
          <div>
            <Lable>WYNIK</Lable>
            <Output>{score}</Output>
          </div>
          <div>
            <Lable>PRZYCISKI STERUJĄCE</Lable>
            <Button value={'STOP'} onClick={handleStop} variant="tertiary" />
          </div>
          <div>
            {status === 'started' && (
              <GameBoard
                tiles={tiles}
                setScore={setScore}
                molesOption={molesOption}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};
