import React from "react";
import { Link } from "react-router-dom";
import CardLink from "../cardLink/cardLink";
import "./interLink.css";

function interLink() {
  return (
    <div className="interLink">
      <CardLink title="Nos biens en vente" img="assets/vente.jpg" link="/acheter" />
      <CardLink title="Vendre votre bien" img="assets/vendre.jpg" link="/vendre" />
      <CardLink title="Nos biens en location" img="assets/louer.webp" link="/location" />
      <CardLink title="Nous contacter" img="assets/contact.webp" link="/contact" />
    </div>
  );
}

export default interLink;
