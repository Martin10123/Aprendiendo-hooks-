import React, { useEffect, useState } from "react";

export const Messange = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const { x, y } = coords;

  useEffect(() => {
    const mouseMove = (e) => {
      const coords = { x: e.x, y: e.y };
      setCoords(coords, x, y);
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, [x, y]);

  return (
    <>
      <h3>Soy un h3</h3>
      <p>
        x: {x} y: {y}
      </p>
    </>
  );
};
