import React from "react";
import classes from "./Backdrop.module.scss";

const Backdrop: React.FC<{ onClick: () => void }> = function (props) {
  return <div className={classes.backdrop} onClick={props.onClick} />;
};

export default Backdrop;
