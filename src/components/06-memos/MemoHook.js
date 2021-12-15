import React, { useMemo, useState } from "react";
import procesoPesado from "../../Helpers/procesoPesado";
import { useConter } from "../../hooks/useCounter";
import "../02-useEffect/effects.css";

const MemoHook = () => {
  const { stateCounter, increment } = useConter(100);
  const [show, setShow] = useState(true);
  const memoProcesoPesado = useMemo(
    () => procesoPesado(stateCounter),
    [stateCounter]
  );

  return (
    <div>
      <h1>
        Counter useMemo: <small> {stateCounter} </small>
      </h1>
      <hr />

      <p> {memoProcesoPesado} </p>

      <button className="btn btn-primary" onClick={increment}>
        +1
      </button>

      <button
        onClick={() => {
          setShow(!show);
        }}
        className="btn btn-outline-primary ml-3"
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  );
};

export default MemoHook;
