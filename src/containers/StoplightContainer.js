import { useState } from "react";
import Stoplight from "./components/Stoplight";

const StoplightContainer = () => {
  const [color, setColor] = useState("red");

  <Stoplight color={color} />;
};

export default StoplightContainer;
