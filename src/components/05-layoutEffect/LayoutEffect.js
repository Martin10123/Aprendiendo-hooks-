import React, { useLayoutEffect, useRef, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useConter } from "../../hooks/useCounter";
import "./layout.css";

export const Layout = () => {
  const { stateCounter, increment } = useConter(1);

  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${stateCounter}`
  );

  const { quote } = !!data && data[0];

  const pTag = useRef();

  const [boxSize, setBoxSize] = useState({});

  useLayoutEffect(() => {
    setBoxSize(pTag.current.getBoundingClientRect());
  }, [quote]);

  return (
    <div>
      <h1>Layout Effect</h1>
      <hr />
      <blockquote className="blockquote text-right">
        <p ref={pTag} className="mb-o">
          {quote}
        </p>
      </blockquote>

      <pre>{JSON.stringify(boxSize, null, 3)}</pre>
      <button className="btn btn-primary" onClick={increment}>
        Siguiente Frase
      </button>
    </div>
  );
};
