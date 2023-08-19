import './styles.css';
import { PromisyExample1 } from './Przykład 1';
import { PromisyExample2 } from './PRZYKŁAD 2';
import { PromisyExample3 } from './Przykład 3';
import { TryCatchFinally } from './Przykład 4';
import { PromiseExcercise } from './Przykład 5';
import { AsyncAwaitExample1 } from './Przykład 6';
import { AsyncAwaitExample2 } from './Przykład 7';
import { AsyncAwaitExample3 } from './Przykład 8';
import { AsyncAwaitExcercise1 } from './AsyncAwaitExcercise1';
import { AsyncAwaitExcercise2 } from './AsyncAwaitExercise2';
import { PromiseMethods } from './PromiseMethods';

export const AsyncAwait = () => {
  return (
    <div>
      <h1>Async, Await, Promise methods</h1>
      <h2>Powtórka z poprzednich zajęć</h2>
      <PromisyExample1 />
      <PromisyExample2 />
      <PromisyExample3 />
      <TryCatchFinally />
      <PromiseExcercise />
      <h2>Async Await - Teoria</h2>
      <AsyncAwaitExample1 />
      <AsyncAwaitExample2 />
      <AsyncAwaitExample3 />
      <h2>Async Await Ćwiczenia</h2>
      <AsyncAwaitExcercise1 />
      <AsyncAwaitExcercise2 />
      <PromiseMethods />
    </div>
  );
};
