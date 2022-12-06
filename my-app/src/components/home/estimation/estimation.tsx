import React, { PropsWithChildren } from "react";
import EstimationCard from "../../common/estimationCard/estimationCard";
import "./estimation.css";

interface EstimationProps {
  img: string;
}
const Estimation = ({ img }: PropsWithChildren<EstimationProps>) => (
  <div
    className="estimation"
    style={{
      backgroundImage: `url(" ${img} ")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <EstimationCard
      title="Profitez d'une estimation offerte avec ImmoHouse"
      text="Obtenez une estimation de la valeur de votre bien réalisée par un professionnel de l’immobilier en quelques clics."
    />
  </div>
);

export default Estimation;
