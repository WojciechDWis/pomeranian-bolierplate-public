import { useState, useEffect } from 'react';

export function AsyncAwaitExcercise1() {
  const [result, setResult] = useState();

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5;
      if (success) resolve("I'm resolved!");
    }, 1000);
  });
  useEffect(() => {
    promise.then((result) => {
      setResult(result);
    });
  }, []);

  return (
    <div>
      <h3>Async Await Ćwiczenie - with useEffect</h3>
      <div>Result: {result} </div>
    </div>
  );
}
