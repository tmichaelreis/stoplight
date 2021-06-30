import { useState } from "react";
import Stoplight from "../components/Stoplight.js";

const StoplightContainer = () => {
  const [color, setColor] = useState("green");

  return <Stoplight currentColor={color} />;
};

export default StoplightContainer;
