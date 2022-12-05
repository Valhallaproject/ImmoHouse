import React from "react";

interface InputProps {
  id: string;
  name: string;
  placeholder: string;
  type: string;
  value: string;
  className?: string;
}

const Input = ({ id, name, placeholder, type, value, className }: InputProps) => (
  <input
    className={className}
    type={type}
    placeholder={placeholder}
    name={name}
    id={id}
    value={value}
  />
);

export default Input;