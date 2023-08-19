import { useState } from 'react';

const DELAY = 100;
const TIMES = 1e3; // 1000

function getSomething(size, delay = DELAY) {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      const result = Array(size)
        .fill(0)
        .map((_, index) => ({ index }));
      resolve('Success: ' + result.length);
    }, delay);
  });
}

export function PromiseMethods() {
  const [result, setResult] = useState('empty');

  const handleOneByOne = async () => {
    console.time('promise-one-by-one');
    const p1 = await getSomething(TIMES * 1);
    const p2 = await getSomething(TIMES * 2);
    const p3 = await getSomething(TIMES * 3);
    console.timeEnd('promise-one-by-one');
    setResult([p1, p2, p3].join());
  };
  const handleAll = async () => {
    console.time('promise-all');
    const p1 = getSomething(TIMES * 1);
    const p2 = getSomething(TIMES * 2);
    const p3 = getSomething(TIMES * 3);
    const allDone = await Promise.all([p1, p2, p3]);
    console.timeEnd('promise-all');
    setResult(allDone.join());
  };

  const handleAllSettled = async () => {
    console.time('promise-all-settled');
    const p1 = getSomething(TIMES * 1);
    const p2 = getSomething(TIMES * 2);
    const p3 = getSomething(TIMES * 3);
    const allDone = await Promise.allSettled([p1, p2, p3]);
    console.timeEnd('promise-all-settled');
    setResult(allDone.join());
  };

  const handleAny = async () => {
    console.time('promise-any');
    const p1 = getSomething(TIMES * 1);
    const p2 = getSomething(TIMES * 2);
    const p3 = getSomething(TIMES * 3);
    const anyFulfilled = await Promise.any([p1, p2, p3]);
    console.timeEnd('promise-any');
    setResult(anyFulfilled);
  };

  const handleRace = async () => {
    console.time('promise-race');
    const p1 = getSomething(TIMES * 1);
    const p2 = getSomething(TIMES * 2);
    const p3 = Promise.reject('Failed :(');
    const raceFirst = await Promise.race([p1, p2, p3]);
    console.timeEnd('promise-race');
    setResult(raceFirst);
  };

  return (
    <div className="promise-excercise">
      <h3>Promise Methods</h3>
      <button type="button" onClick={handleOneByOne}>
        One by One
      </button>
      <button type="button" onClick={handleAll}>
        Handle All
      </button>
      <button type="button" onClick={handleAllSettled}>
        Handle All Settled
      </button>
      <button type="button" onClick={handleAny}>
        Handle Any
      </button>
      <button type="button" onClick={handleRace}>
        Handle Race
      </button>
      <button type="button" onClick={() => setResult('cleared')}>
        Clear
      </button>
      <div>result: {result}</div>
    </div>
  );
}
