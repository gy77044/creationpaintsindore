// /src/components/ui/button.tsx

import React from "react";
import { cn } from "../lib/utils"; // optional: utility to merge Tailwind classes

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = "default",
  ...props
}) => {
  const baseStyle =
    "inline-flex items-center justify-center font-medium rounded-md transition focus:outline-none";

  const variants = {
    default: "bg-orange-500 text-white hover:bg-orange-600",
    outline: "border border-orange-500 text-orange-500 hover:bg-orange-100",
  };

  return (
    <button
      className={cn(baseStyle, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};
