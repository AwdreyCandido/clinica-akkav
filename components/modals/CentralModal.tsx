import React, { useEffect } from "react";
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
          <div data-aos="slide-up" data-aos-duration="400" className="flex bg-blue-primary justify-center items-center text-black-80 w-full bg-transparent">
            <section
              className={`absolute z-[130] top-[50%] -translate-y-[50%] overflow-auto duration-300`}
            >
              {props.children}
            </section>
          </div>,
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
