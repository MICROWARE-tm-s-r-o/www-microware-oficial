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
  const baseStyles = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold text-sm tracking-wide transition-all duration-300 transform active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-mw-orange text-white hover:bg-orange-600 shadow-md hover:shadow-xl hover:-translate-y-0.5 focus:ring-mw-orange border border-transparent",
    secondary: "bg-mw-blue text-white hover:bg-blue-800 shadow-md hover:shadow-xl hover:-translate-y-0.5 focus:ring-mw-blue border border-transparent",
    outline: "border-2 border-mw-blue text-mw-blue hover:bg-mw-blue hover:text-white shadow-sm hover:shadow-md focus:ring-mw-blue"
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