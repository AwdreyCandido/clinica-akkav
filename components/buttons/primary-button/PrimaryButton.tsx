import React, { FormEvent } from "react";

const PrimaryButton: React.FC<{
  onClick: (event: FormEvent<HTMLButtonElement>) => void;
  title: string;
  type?: string;
}> = ({ onClick, title, type }) => {
  const buttonStyle =
    type === "primary"
      ? "text-base bg-blue-primary outline w-full text-white py-5 px-8 rounded-3xl hover:text-blue-dark hover:bg-white hover:outline-1 hover:outline-blue-primary duration-300"
      : "text-base bg-red-primary outline w-full text-white py-5 px-8 rounded-3xl hover:text-red-primary hover:bg-white hover:outline-1 hover:outline-red-primary duration-300";

  return (
    <button onClick={onClick} className={buttonStyle}>
      {title}
    </button>
  );
};

export default PrimaryButton;
