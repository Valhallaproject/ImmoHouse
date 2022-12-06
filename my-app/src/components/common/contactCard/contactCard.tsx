import React, { PropsWithChildren } from "react";
import Button from "../button/button";
import Input from "../input/input";
import "./contactCard.css"

interface ButtonProps {
  title: string;
}

const contactCard = ({ title }: PropsWithChildren<ButtonProps>) => (
  <div className="contactCard">
    <h2>{title}</h2>
    <div className="contactAction">
        <Button title="Contactez-nous" link="" />
    </div>
  </div>
);

export default contactCard;
