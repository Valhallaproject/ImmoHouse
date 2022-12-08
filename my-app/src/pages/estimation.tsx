import React from "react";
import Header from "../components/common/header/header";
import Banner from "../components/common/banner/banner";
import Footer from "../components/common/footer/footer";
import EstimationCalc from "../components/estimation/estimationCalc/estimationCalc";
import EstimationText from "../components/estimation/estimationText/estimationText";
import Services from "../components/estimation/services/services";
import BandeauVente from "../components/estimation/bandeauVente/bandeauVente";
import Accordion from "../components/common/accordion/accordion";
import "./styles.css"

function estimation() {
  return (
    <>
      <Header />
      <Banner
        title="Nous réalisons gratuitement votre estimation"
        image="assets/bannerEstimation.jpeg"
      />
      <div className="contenu">
        <EstimationCalc />
        <EstimationText image="assets/estimationText.jpeg" />
        <Services />
        <BandeauVente image="assets/contact.webp" />
      </div>
      <h2 className="titleAccordion">Avez-vous des questions ? Consultez notre FAQ</h2>
      <Accordion
        title="Comment se déroule une évaluation réalisée par ImmoHouse ?"
        content="Notre estimation immobilière se déroule directement à votre domicile. Un de nos conseillers se rend chez vous. Il analyse sur place les avantages de votre propriété ainsi que les commodités environnantes. Celles-ci ont généralement un impact positif sur la valeur de votre propriété. C'est-à-dire que la présence d'écoles, de moyens de transport, de services de santé, sont pris en compte par notre spécialiste. "
      />
      <Accordion
        title="Dans quel secteur ImmoHouse estime votre bien immobilier ?"
        content="Vous bénéficiez d'une estimation immobilière offerte par nos soins. Grâce à la présence de nos agences partout en France, nous proposons nos services dans ces villes et leurs alentours "
      />
      <Accordion
        title="Quel est le coût d’une évaluation immobilière ?"
        content="En passant par notre agence, vous ne devez pas dépenser un seul euro. Nos estimations immobilières sont offertes. Elles sont réalisées par des conseillers locaux. "
      />

      <Footer />
    </>
  );
}

export default estimation;
