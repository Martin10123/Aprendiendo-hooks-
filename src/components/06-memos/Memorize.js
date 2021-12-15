import React, { useState } from "react";
import { useConter } from "../../hooks/useCounter";
import "../02-useEffect/effects.css";
import Small from "./Small";

const Memorize = () => {
  const { stateCounter, increment } = useConter(10);
  const [show, setShow] = useState(true);

  return (
    <div>
      <h1>
        Counter: <Small value={stateCounter} />
      </h1>
      <hr />

      <button className="btn btn-primary" onClick={increment}>
        +1
      </button>

      <button
        onClick={() => {
          setShow(!show);
        }}
        className="btn btn-outline-primary ml-3"
      >
        Show/Hide {JSON.stringify(show)}{" "}
      </button>
    </div>
  );
};

export default Memorize;
