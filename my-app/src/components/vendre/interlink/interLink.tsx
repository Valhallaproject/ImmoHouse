import React from "react";
import CardLink from "./../../home/cardLink/cardLink";
import "./../../home/interLink/interLink.css";

function interLink() {
  return (
    <div className="interLink">
      <CardLink title="Faites estimer votre bien" img="assets/faireEstimer.webp" link="/estimez-votre-bien" />
      <CardLink title="Vendre grâce à ImmoHouse" img="assets/vendre.jpg" link="/pourquoi-nous-choisir"/>
    </div>
  );
}

export default interLink;