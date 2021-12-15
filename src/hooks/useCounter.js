import { useState } from "react";

export const useConter = (initialState = 10) => {
  const [stateCounter, setStateCounter] = useState(initialState);

  const increment = () => {
    setStateCounter(stateCounter + 1);
  };

  const reset = () => {
    setStateCounter(initialState);
  };

  const decrement = () => {
    setStateCounter(stateCounter - 1);
  };

  return {
    stateCounter,
    increment,
    decrement,
    reset,
  };
};
