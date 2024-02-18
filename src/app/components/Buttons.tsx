import { FC, MouseEventHandler, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick: MouseEventHandler;
  isDisabled: boolean;
};

const Button: FC<ButtonProps> = ({ children, onClick, isDisabled }) => {
  return (
    <button
      disabled={isDisabled}
      className="bg-blue-700 p-2 w-72   text-zinc-50 rounded-lg outline-none"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
