import React from "react";
import Button from "../../common/button/button";
import "./bandeauVente.css";

interface BandeauVenteProps {
  image: string;
}

const BandeauVente = ({ image }: BandeauVenteProps) => (
  <div className="bandeauVente">
    <div className="bandeauVenteInfo">
      <h2>Confiez votre vente à une équipe expérimentée</h2>
      <p>
      ImmoHouse met à votre disposition son fichier qualifié et son savoir-faire issu de plus de 40 ans d’expérience. Ainsi, vous pouvez compter sur l'appui d'une équipe connaissant parfaitement son métier et le marché local durant l'ensemble de votre transaction. Vous avez une question d'ordre commercial, juridique ou fiscal ? Nos conseillers vous guident et apportent des réponses à vos interrogations
      </p>
      <Button title="Vendre avec nous" link="/pourquoi-nous-choisir" />
    </div>

    <div
      className="bandeauVenteImg"
      style={{
        backgroundImage: `url(" ${image} ")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></div>
  </div>
);

export default BandeauVente;
