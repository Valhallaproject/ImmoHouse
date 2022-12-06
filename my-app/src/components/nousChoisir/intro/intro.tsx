import React from "react";
import "./intro.css";

interface IntroProps {
  image: string;
}

const intro = ({ image }: IntroProps) => (
    <div className="introTitle">
    <h1><span>ImmoHouse</span> c’est plus de 40 ans d’expérience à votre service </h1>
  <div className="intro">
            

    <div className="introText">
      <p>
        Mener à bien une vente immobilière ne se fait pas à la légère. Chez
        ImmoHouse, nos conseillers de terrain l'ont compris. C'est pourquoi nous
        appuyons nos méthodes de travail sur un savoir-faire qui fait ses
        preuves depuis plusieurs décennies. Afin qu'elles correspondent aux
        innovations du secteur, ces méthodes sont actualisées. Pour preuve, les
        photos professionnelles HD, la visite virtuelle ou le home staging qui
        figurent au panel de nos prestations.
      </p>
      <p>
        Par ailleurs, les recommandations avisées que nous sommes en mesure de
        fournir à nos clients, les guident à travers leur processus
        transactionnel. Il en va de même pour les stratégies commerciales que
        nous appliquons avec son accord pour vendre efficacement le bien.
      </p>
      <p>
        Vous êtes à la recherche d’une transaction rapide et validée sur les
        plans juridique, commercial et technique ? ImmoHouse optimise et sécurise
        la commercialisation de vos biens. Nous vous accompagnons et allégeons
        ainsi vos contraintes dans un univers législatif de plus en plus
        complexe. Notre expertise et notre large portefeuille sont une valeur
        ajoutée sur un marché de l’immobilier marqué par une tendance à la
        spécialisation.
      </p>
      <p>
        ImmoHouse est votre partenaire pour vendre au meilleur prix dans les
        meilleurs délais.
      </p>
    </div>
    <div
      className="introImage"
      style={{
        backgroundImage: `url(" ${image} ")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></div>
  </div>
  </div>
);

export default intro;
