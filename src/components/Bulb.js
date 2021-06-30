const Bulb = ({ color, active }) => {
  let classNames = ["bulb", color];
  if (active) {
    classNames.push("active");
  }

  return <div className={classNames}>{color}</div>;
};

export default Bulb;
