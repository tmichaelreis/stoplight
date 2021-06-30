import { useState } from "react";

import Stoplight from "../components/Stoplight.js";

const StoplightContainer = () => {
  const colors = ["green", "yellow", "red"];
  const [currentColor, setCurrentColor] = useState("green");

  const advanceColor = () => {
    const currentColorIndex = colors.indexOf(currentColor);

    const nextColorIndex = (currentColorIndex + 1) % colors.length;

    setCurrentColor(colors[nextColorIndex]);
  };

  return (
    <div>
      <button onClick={advanceColor}>Advance Light</button>
      <Stoplight colors={colors} currentColor={currentColor} />
    </div>
  );
};

export default StoplightContainer;
