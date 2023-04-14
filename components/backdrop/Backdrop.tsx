import React from "react";
import classes from "./Backdrop.module.scss";

const Backdrop: React.FC<{ onClick: () => void }> = function (props) {
  return <div className={classes.backdrop} onClick={props.onClick} />;
};

<<<<<<< HEAD
export default Backdrop;
=======
export default Backdrop;
>>>>>>> 826505943138af257584150498a54562b6b742af
