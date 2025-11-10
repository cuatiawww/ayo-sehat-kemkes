import * as React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "destructive";
  size?: "default" | "sm" | "lg" | "icon";
}

export default function Button({ 
  className = "", 
  variant = "default", 
  size = "default", 
  children, 
  ...props 
}: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#18b3ab] disabled:pointer-events-none disabled:opacity-50";
  
  const variantClasses = {
    default: "bg-[#18b3ab] text-white hover:bg-[#15a098] shadow-sm",
    outline: "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:border-[#18b3ab]",
    ghost: "text-gray-700 hover:bg-gray-100",
    destructive: "bg-red-500 text-white hover:bg-red-600 shadow-sm",
  };

  const sizeClasses = {
    default: "h-9 px-4 py-2 text-sm",
    sm: "h-8 px-3 text-xs rounded-md",
    lg: "h-10 px-8 text-base rounded-md",
    icon: "h-9 w-9",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}