import { useState } from "react";

function MultipleCondition() {
  const [count, setCount] = useState(1);
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Counter</button>
      {count == 0 ? (
        <h1>Condition 0 </h1>
      ) : count == 1 ? (
        <h1>Condition 1 </h1>
      ) : count == 2 ? (
        <h1>Condition 2 </h1>
      ) : count == 3 ? (
        <h1>Condition 3 </h1>
      ) : count == 4 ? (
        <h1>Condition 4 </h1>
      ) : (
        <h1>Other condition</h1>
      )}
    </div>
  );
}

export default MultipleCondition;
