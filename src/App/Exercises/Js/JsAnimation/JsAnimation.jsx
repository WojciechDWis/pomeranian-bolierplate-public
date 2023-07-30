import './styles.css';
import { useEffect, useState } from 'react';

const startSize = 10;
const endSize = 100;

export const JsAnimation = ({ duration = 5000 }) => {
  const [size, setSize] = useState(startSize);
  const [isIncrementing, setIsIncrementing] = useState(true);

  const distance = (endSize - startSize) * 2;
  const noOfSteps = 20;
  const stepSize = Math.round(distance / noOfSteps);
  const midWay = startSize + stepSize * (noOfSteps / 2);
  const stepInterval = Math.round(duration / noOfSteps);

  function useEffectCallback() {
    function increment() {
      setSize(function (currentSize) {
        return currentSize + startSize;
      });
    }
    function decrement() {
      setSize(function (currentSize) {
        return currentSize - startSize;
      });
    }

    const intervalId = setInterval(
      isIncrementing ? increment : decrement,
      stepInterval
    );
    return function () {
      clearInterval(intervalId);
    };
  }

  useEffect(useEffectCallback, [isIncrementing, stepInterval, stepSize]);

  useEffect(
    function () {
      if (size === midWay) setIsIncrementing(false);
      if (size === startSize) setIsIncrementing(true);
    },
    [size, midWay]
  );

  return (
    <div>
      <h1>Ćwiczenie - animacja</h1>
      <div>
        <p style={{ backgroundColor: 'aqua', width: size, height: size }}></p>
      </div>
    </div>
  );
};
