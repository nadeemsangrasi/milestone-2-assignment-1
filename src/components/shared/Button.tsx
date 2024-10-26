import React from "react";

const Button = ({
  label,

  className,
}: {
  label: string;

  className?: string;
}) => {
  return (
    <button
      className={`${className} px-4 py-2 bg-black text-white rounded-md text-center"`}
    >
      {label}
    </button>
  );
};

export default Button;
