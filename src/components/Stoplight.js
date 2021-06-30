import Bulb from "./Bulb.js";

const Stoplight = ({ currentColor }) => {
  const colors = ["green", "yellow", "red"];

  return (
    <div className="stoplight">
      {colors.map((color) => {
        return <Bulb color={color} active={color === currentColor} />;
      })}
    </div>
  );
};
export default Stoplight;
