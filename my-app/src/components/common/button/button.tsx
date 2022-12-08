import React, { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import "./button.css"

interface ButtonProps {
  title: string;
  className?: string;
  link: string;
  noBg?: boolean;
  type?: "button" | "submit" | "reset";
}

const Button = ({
  title,
  className,
  link,
  type,
}: PropsWithChildren<ButtonProps>) => (
  <Link to={link}>
    <button
      type={type || "button"}
      className={className}
    >
      {title}
    </button>
  </Link>
);

export default Button;
