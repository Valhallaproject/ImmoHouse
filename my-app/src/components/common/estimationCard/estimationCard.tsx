import React, { PropsWithChildren } from "react";
import Button from "../button/button";
import "./estimationCard.css"

interface ButtonProps {
  title: string;
  text: string;
}

const estimationCard = ({ title, text }: PropsWithChildren<ButtonProps>) => (
  <div className="estimationCard">
    <h2>{title}</h2>
    <p>{text}</p>
    <div className="estimationAction">
     <Button title="Estimer mon bien" link="" />
    </div>
  </div>
);

export default estimationCard;
