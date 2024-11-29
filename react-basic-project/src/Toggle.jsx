import { useState } from "react";

function Toggle() {
  const [display, setdisplay] = useState(true);
  return (
    <>
      <h1>Toggle in React</h1>

      <button onClick={() => setdisplay(!display)}>Toggle</button>
      {display ? <h2>Zayyan</h2> : null}
    </>
  );
}

export default Toggle;
