import React from "react";

const ShowIncrement = React.memo(({ increment }) => {
  console.log("me genera again");

  return (
    <button className="btn btn-primary" onClick={() => increment(5)}>
      incrementar
    </button>
  );
});

export default ShowIncrement;
