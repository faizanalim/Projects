import { useEffect, useState } from "react";
import HandlePropsSideEffect from "./HandlePropsSideEffect";

function App() {
  const [counter, setCounter] = useState(0);
  // const [data, dataCounter] = useState(0);

  // useEffect(() => {
  //   counterFunction();
  // }, [counter]);

  // useEffect(() => {
  //   callOnce();
  // }, []);

  // function callOnce() {
  //   console.log("call Once called.");
  // }
  // function counterFunction() {
  //   console.log("counterFunction.", counter);
  //}
  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Counter </button>

      {/* <button onClick={() => dataCounter(data + 1)}>Data</button>  */}
      <HandlePropsSideEffect Counter={counter}></HandlePropsSideEffect>
    </div>
  );
}

export default App;
