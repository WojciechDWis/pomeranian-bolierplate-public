import { useDispatch, useSelector } from 'react-redux';
import {
  decrement,
  decrementBy,
  selectValue,
  reset,
  selectError,
  resetError,
} from '../../../../Store/counterSlice';
import { useEffect } from 'react';

export const ReduxStealer = () => {
  const value = useSelector(selectValue);
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  useEffect(() => {
    setTimeout(() => {
      dispatch(resetError());
    }, 2000);
  }, [dispatch, error]);
  return (
    <div className="redux-component">
      <h3>ReduxStealer</h3>
      <div className="redux-output">{value}</div>
      <button onClick={() => dispatch(decrement())}>increment</button>
      <button onClick={() => dispatch(decrementBy(5))}>-5</button>
      <button onClick={() => dispatch(decrementBy(10))}>-10</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <p>{error}</p>
    </div>
  );
};
