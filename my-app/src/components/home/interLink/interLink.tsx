import React from "react";
import CardLink from "../cardLink/cardLink";
import "./interLink.css";

function interLink() {
  return (
    <div className="interLink">
      <CardLink title="Nos biens en vente" img="assets/vente.jpg" link="/acheter#biens-en-vente" />
      <CardLink title="Vendre votre bien" img="assets/vendre.jpg" link="/vendre#container" />
      <CardLink title="Nos biens en location" img="assets/louer.webp" link="/louer#container" />
      <CardLink title="Nous contacter" img="assets/contact.webp" link="/contact#container" />
    </div>
  );
}

export default interLink;
