import React from "react";
import "./estimationText.css"

interface EstimationTextProps {
  image: string
}

const EstimationText = ({ image }: EstimationTextProps) => (
  <div className="estimationText">
      <div
          className="estimationTextImg"
          style={{
            backgroundImage: `url(" ${image} ")`,
            backgroundSize: "cover",
            backgroundPosition: "bottom",
          }}
      ></div>
      <div className="estimationTextInfo">
          <h2>Pourquoi nous confier
votre estimation ?</h2>
          <p>En tant que propriétaire vendeur, vous êtes désireux de connaître la valeur de votre bien ? Pour obtenir une réponse rapide et documentée, tournez-vous vers un acteur historique du marché. L'agence ImmoHouse est votre interlocuteur privilégié en la matière.</p>
          <p>Forte d'une expérience qu'elle couple au talent de conseillers spécialisés, notre agence vous aide à poser le premier jalon de votre vente, en réalisant une estimation immobilière fiable. À cela s'ajoutent des conseils avisés tout au long de la négociation et un accompagnement juridique jusqu’à la signature définitive de votre transaction.</p>
          <p>Grâce à notre professionnalisme, vous concrétisez ainsi la vente de votre propriété de manière sereine. ImmoHouse est sans aucun doute l'allié dont vous avez besoin pour assoir votre vente sur un socle solide et un prix au m² précis.</p>
          <p>Contactez-nous dès à présent pour profiter de votre estimation immobilière gratuite !</p>
      </div>

  </div>
);

export default EstimationText;
