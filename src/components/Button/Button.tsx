import React from 'react';
import './Button.css'
interface ButtonProps {
    label: string;
    backgroundColor: string;
}

const Button: React.FC<ButtonProps> = ({ label, backgroundColor }: ButtonProps) => {
  return (
    <button style={{ backgroundColor: backgroundColor }}>{label}</button>
  );
};

export default Button;
