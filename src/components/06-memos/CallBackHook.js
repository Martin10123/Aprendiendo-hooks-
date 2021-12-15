import React, { useState, useCallback } from "react";
import ShowIncrement from "./ShowIncrement";

const CallBackHook = () => {
  const [counter, setCounter] = useState(10);

  const increment = useCallback(
    (num) => {
      setCounter((c) => c + num);
    },
    [setCounter]
  );

  return (
    <h1>
      UseCallBack: {counter}
      <hr />
      <ShowIncrement increment={increment} />
    </h1>
  );
};

export default CallBackHook;
