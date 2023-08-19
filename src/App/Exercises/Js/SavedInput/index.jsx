import './styles.css';
import { useState } from 'react';

export const SavedInput = () => {
  const ID_COUNT_LOCAL_STORAGE = parseInt(
    localStorage.getItem('list-nicki-index')
  );
  const [idCounter, setIdCounter] = useState(ID_COUNT_LOCAL_STORAGE || 1);

  const NICKNAME_DATA_LOCAL_STORAGE = JSON.parse(
    localStorage.getItem('list-nicki')
  );
  const [nicknameData, setNicknameData] = useState(
    NICKNAME_DATA_LOCAL_STORAGE || []
  );

  const [inputValue, setInputValue] = useState('');

  function handleNicknameAdd() {
    if (inputValue.trim() !== '') {
      const newNicknameData = [
        ...nicknameData,
        { nick: inputValue, id: idCounter },
      ];
      setNicknameData(newNicknameData);

      localStorage.setItem('list-nicki', JSON.stringify(newNicknameData));
      localStorage.setItem('list-nicki-index', idCounter + 1);

      setInputValue('');
      setIdCounter(idCounter + 1);
    }
  }

  return (
    <div>
      <div className="nick-div">
        <h2>NICK</h2>
        <input
          type="text"
          className="input-nick-style"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="save-button" onClick={handleNicknameAdd}>
          DODAJ
        </button>
      </div>
      <div className="lista-nickow">
        <ul>
          {nicknameData.map(({ nick, id }) => (
            <li key={id}>{nick}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
