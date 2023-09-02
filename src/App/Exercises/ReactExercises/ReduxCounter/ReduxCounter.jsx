import { First } from './First';
import { ReduxStealer } from './ReduxStealer';
import './styles.css';

export const ReduxCounter = () => {
  return (
    <div>
      <h1>ReduxStealer</h1>
      <div className="redux-container">
        <ReduxStealer />
        <First />
      </div>
    </div>
  );
};
