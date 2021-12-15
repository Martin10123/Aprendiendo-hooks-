import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { useConter } from "../../hooks/useCounter";
import "../02-useEffect/effects.css";

export const MultipleCustom = () => {
  const { stateCounter, increment } = useConter(1);

  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${stateCounter}`
  );

  const { author, quote } = !!data && data[0];
  return (
    <div>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {loading ? (
        <div className="alert alert-info tex-center">Loading...</div>
      ) : (
        <blockquote className="blockquote text-right">
          <p className="mb-o">{quote}</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      )}

      <button className="btn btn-primary" onClick={increment}>
        Siguiente Frase
      </button>
    </div>
  );
};
