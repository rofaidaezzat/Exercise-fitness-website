import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-2xl ${className}`}
    >
      {children}
    </button>
  );
};
