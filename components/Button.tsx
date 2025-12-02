import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "px-6 py-3 rounded-md font-medium transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-mw-orange text-white hover:bg-mw-orangeHover shadow-mw-orange/20",
    secondary: "bg-mw-blue text-white hover:bg-blue-800 shadow-mw-blue/20",
    outline: "border-2 border-mw-blue text-mw-blue hover:bg-mw-blue hover:text-white"
  };

  const widthClass = fullWidth ? "w-full" : "w-auto";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};