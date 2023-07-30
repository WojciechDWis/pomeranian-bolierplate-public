import { isVisible } from '@testing-library/user-event/dist/utils';
import './styles.css';
import { useState } from 'react';

export const VanishString = () => {
  const [isVisible, setIsVisible] = useState(false);
  function handleShow() {
    setIsVisible(!isVisible);
  }
  return (
    <div>
      <h1>Tekst</h1>
      <button onClick={handleShow}>Kliknij</button>
      <p>{isVisible && 'Jakiś tekst'}</p>
    </div>
  );
};
