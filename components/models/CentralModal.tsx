import React from "react";
import ReactDOM from "react-dom";
import CreateClinic from "../forms/CreateClinic";
import Backdrop from "../backdrop/Backdrop";

const CentralModal: React.FC<{
  closeModal: () => void;
  isOpen: boolean;
  children: JSX.Element | JSX.Element[];
}> = (props) => {
  if (props.isOpen) {
    return (
      <React.Fragment>
        {ReactDOM.createPortal(
          <>{props.children}</>,
          document.getElementById("portal-root")!
        )}
        {ReactDOM.createPortal(
          <Backdrop onClick={props.closeModal} />,
          document.getElementById("backdrop-root")!
        )}
      </React.Fragment>
    );
  } else {
    return <div />;
  }
};

export default CentralModal;