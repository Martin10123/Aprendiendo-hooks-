import React, { useState } from "react";
import { MultipleCustom } from "../03-example/MultipleCustom";

const RealExampleRef = () => {
  const [show, setshow] = useState(false);

  return (
    <div>
      <h1>Real example ref</h1>
      <hr />

      {show && <MultipleCustom />}

      <button onClick={() => setshow(!show)} className="btn btn-primary mt-5">
        Show/hide
      </button>
    </div>
  );
};

export default RealExampleRef;
