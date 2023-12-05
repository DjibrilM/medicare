import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonVariants } from "./types";
import { cn } from "../../../util/cn";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariants;
  children: ReactNode;
}

const Button: React.FC<CustomButtonProps> = ({
  variant,
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={cn("py-2 px-7  rounded-md font-[300px] active: ", className, {
        "bg-primary-500 hover:bg-primary-600 text-white":
          variant === "contained",
        "bg-transparent hover:bg-gray-100 text-primary-700": variant === "text",
        "border bg-transparen hover:bg-gray-100": variant === "outline",
      })}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
