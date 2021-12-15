import React from "react";
import { useConter } from "../../hooks/useCounter";
import "./counter.css";

export const CounterWithCustomHook = () => {
  const { state, increment, decrement, reset } = useConter();

  return (
    <>
      <h1>Counter with hook: {state} </h1>
      <hr />

      <button onClick={() => increment(4)} className="btn">
        +1
      </button>
      <button onClick={reset} className="btn">
        reset
      </button>
      <button onClick={() => decrement(4)} className="btn">
        -1
      </button>
    </>
  );
};
