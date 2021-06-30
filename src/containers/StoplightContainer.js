import { useState } from "react";
import Stoplight from "../components/Stoplight.js";

const StoplightContainer = () => {
  const [color, setColor] = useState("red");

  return <Stoplight color={color} />;
};

export default StoplightContainer;
