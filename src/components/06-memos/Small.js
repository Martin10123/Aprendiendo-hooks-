import React, { memo } from "react";

const Small = memo (({ value }) => {
  console.log("te volvi a probar :3");

  return <small>{value}</small>;
});

export default Small;
