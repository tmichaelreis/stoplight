import styles from "./Bulb.module.css";

const Bulb = ({ color, active }) => {
  let classNames = [styles.bulb, styles[color]];
  if (active) {
    classNames.push(styles.active);
  }

  return <div className={classNames.join(" ")}></div>;
};

export default Bulb;
