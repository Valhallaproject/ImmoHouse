import React from "react";
import "./icons.css";

interface IconsProps {
  image: string;
  text: string
}

const Icons = ({ image, text }: IconsProps) => (
    <div className="icons">
        <div className="circleIcons">
            <img src={image} alt="" />
        </div>
        <p>{text}</p>
    </div>
);

export default Icons;