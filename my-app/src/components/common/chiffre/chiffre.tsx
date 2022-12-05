import React, { PropsWithChildren } from "react";
import "./chiffre.css"

interface ChiffreProps {
  number: number;
  text: string;
}

const Chiffre = ({
  number,
  text,
}: PropsWithChildren<ChiffreProps>) => (
    <div className="chiffre">
    <p>+ de <span>{number}</span></p>
    <p>{text}</p>
    </div>
);

export default Chiffre;
