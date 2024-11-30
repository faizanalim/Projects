import { useEffect, useState } from "react";

const HandlePropsSideEffect = ({ Counter }) => {
  function HandleProps() {
    console.log("Handle Counter props called.");
  }
  useEffect(() => {
    HandleProps();
  }, [Counter]);
  //HandleProps();
  return (
    <>
      <h1>Handle Props Value : {Counter}</h1>
    </>
  );
};

export default HandlePropsSideEffect;
