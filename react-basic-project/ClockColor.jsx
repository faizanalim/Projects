import { useEffect } from "react";
import { useState } from "react";

const ClockColor = ({ color }) => {
  const [clock, setclock] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setclock(new Date().toLocaleTimeString());
    }, 1000);
  });

  return (
    <>
      <h1
        style={{
          color: color,
          background: "#000",
          width: "170px",
          borderRadius: "5px",
        }}
      >
        {clock}
      </h1>
    </>
  );
};

export default ClockColor;
