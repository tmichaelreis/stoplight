import Bulb from "./Bulb.js";

import styles from "./Stoplight.module.css";

const Stoplight = ({ colors, currentColor }) => {
  return (
    <div className={styles.stoplight}>
      {colors.map((color) => {
        return <Bulb color={color} active={color === currentColor} />;
      })}
    </div>
  );
};
export default Stoplight;
