import { useDispatch, useSelector } from 'react-redux';
import {
  increment,
  selectValue,
  incrementBy,
} from '../../../../Store/counterSlice';

export const First = () => {
  // value
  // counterSlice
  // increment
  const value = useSelector(selectValue);
  const dispatch = useDispatch();
  return (
    <div className="redux-component">
      <h3>First Component</h3>
      <div className="redux-output">{value}</div>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(incrementBy(5))}>+5</button>
      <button onClick={() => dispatch(incrementBy(10))}>+10</button>
    </div>
  );
};
