import React from 'react'
import Header from "../components/common/header/header";
import Banner from "../components/common/banner/banner";
import Footer from "../components/common/footer/footer";
import InterLink from '../components/vendre/interlink/interLink';
import Contact from "../components/contact/contact";
import Texte from '../components/vendre/texte/texte';
import "./styles.css"



function vendre() {
  return (
    <div>
      <Header />
      <Banner title="ImmoHouse, votre partenaire
de l’estimation à la vente de votre bien" 
image="assets/vente.webp"/>
<div className="contenu">
  <h1>Vous souhaitez vendre votre bien immobilier avec nous ?</h1>
  <InterLink />
  <Texte />
  <Contact img="assets/bandeauContact.webp" />

</div>
      
      <Footer />

    </div>
  )
}

export default vendre