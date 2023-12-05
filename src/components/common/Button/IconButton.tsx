import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonVariants } from "./types";
import { cn } from "../../../util/cn";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariants;
  children: ReactNode;
  rounded: boolean;
}

const IconButton: React.FC<CustomButtonProps> = ({
  rounded,
  variant,
  className,
  ...props
}) => {
  return (
    <button
      className={cn("rounded-md py-3 px-3 font-[300px] active: ", className, {
        "bg-primary-700 rounded hover:bg-primary-600 text-white":
          variant === "contained",
        "bg-transparent hover:bg-gray-100 text-primary-700": variant === "text",
        "border bg-transparen hover:bg-gray-100": variant === "outline",
        "rounded-full": rounded,
      })}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default IconButton;
