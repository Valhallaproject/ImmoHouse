import React, { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
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
  <HashLink to={link}>
    <button
      type={type || "button"}
      className={className}
    >
      {title}
    </button>
  </HashLink>
);

export default Button;
