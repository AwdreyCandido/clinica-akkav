import React from "react";

const PrimaryButton: React.FC<{ onClick: () => void; title: string }> = ({
  onClick,
  title,
}) => {
  return (
    <button
      onClick={onClick}
      className="text-base bg-blue-primary outline text-white py-5 px-8 rounded-3xl hover:text-blue-dark hover:bg-white hover:outline-1 hover:outline-blue-primary duration-300"
    >
      {title}
    </button>
  );
};

export default PrimaryButton;
