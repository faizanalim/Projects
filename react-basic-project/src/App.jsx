import { useState } from "react";
import ClockColor from "../ClockColor";

function App() {
  const [color, setcolor] = useState("red");
  return (
    <div>
      <h1>Digital Clock in React</h1>
      <select onChange={(event) => setcolor(event.target.value)}>
        <option value="red">Red</option>
        <option value="Blue">Blue</option>
        <option value="green">Green</option>
      </select>
      <ClockColor color={color}></ClockColor>
    </div>
  );
}

export default App;
