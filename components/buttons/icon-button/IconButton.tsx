import React from "react";

const IconButton: React.FC<{
  onClick: () => void;
  icon: JSX.Element;
  type: string;
}> = ({ onClick, icon, type }) => {
  const buttonStyle =
    type === "primary"
      ? "text-th bg-blue-primary outline text-white p-3 rounded-2xl hover:text-blue-dark hover:bg-white hover:outline-1 hover:outline-blue-primary duration-300"
      : "text-th bg-red-primary outline text-white p-3 rounded-2xl hover:text-blue-dark hover:bg-white hover:outline-1 hover:outline-red-light hover:text-red-primary duration-300";

  return (
    <button onClick={onClick} className={buttonStyle}>
      {icon}
    </button>
  );
};

export default IconButton;