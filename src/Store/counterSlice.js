import { createSlice } from '@reduxjs/toolkit';

const sliceName = 'counter-test';
const saveToLocalStorage = (state) => {
  localStorage.setItem(sliceName, JSON.stringify(state));
};
const getFromLocalStorage = () => {
  const fromLocalStorage = localStorage.getItem(sliceName);
  console.log(JSON.parse(fromLocalStorage));
  return JSON.parse(fromLocalStorage);
};

const initialValue = 0;
const initialState = {
  value: initialValue,
  errorMessage: '',
};
const getInitialState = () => {
  const storageValue = getFromLocalStorage();
  if (!storageValue) {
    return initialState;
  } else {
    return storageValue;
  }
};
export const counterSlice = createSlice({
  name: { sliceName },
  initialState: getInitialState(),
  reducers: {
    increment: (state) => {
      state.value += 1;
      saveToLocalStorage(state);
    },
    incrementBy: (state, action) => {
      if (state.value + action.payload > 50) {
        state.errorMessage = 'Nie może być wieksza niż 50';
      }
      state.value += action.payload;
      saveToLocalStorage(state);
    },
    decrement: (state) => {
      state.value -= 1;
      saveToLocalStorage(state);
    },
    decrementBy: (state, action) => {
      if (state.value - action.payload < 0) {
        state.errorMessage = 'Nie może być mniejsze niż 0';
      }
      state.value -= action.payload;
      saveToLocalStorage(state);
    },
    reset: (state) => {
      state.value = initialValue;
      saveToLocalStorage(state);
    },
    resetError: (state) => {
      state.errorMessage = '';
      saveToLocalStorage(state);
    },
  },
});

export const selectValue = (state) => state?.counterSlice?.value;
export const selectError = (state) => state?.counterSlice?.errorMessage;
export const {
  increment,
  incrementBy,
  decrement,
  decrementBy,
  reset,
  resetError,
} = counterSlice.actions;
