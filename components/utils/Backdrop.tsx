import React from "react";

const Backdrop: React.FC<{ children: JSX.Element }> = ({ children }) => {
  return <div className="w-screen h-screen">{children}</div>;
};

export default Backdrop;
