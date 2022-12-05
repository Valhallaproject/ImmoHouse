import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/common/header/header";
import Banner from "../components/common/banner/banner";
import Description from "../components/home/description/description";
import InterLink from "../components/home/interLink/interLink";
import Estimation from "../components/home/estimation/estimation";
import Footer from "../components/common/footer/footer";
import Phone from "./../assets/phone.png";
import Mail from "./../assets/mail.png";

import "./styles.css";

function agence() {
  const location = useLocation();
  const state = location.state.cards;

  return (
    <div>
      <Header />
      <Banner title="ImmoHouse" image="assets/banner.webp" />
      <div className="agence">
        <div className="agenceLeft"
         style={{
            backgroundImage: `url(" ${"http://localhost:8055/assets/" + state.image} ")`,
            backgroundSize: "cover",
            backgroundPosition: "center"
        }}>
        </div>
        <div className="agenceRight">
            <p>Vous cherchez une agence immobilière à {state.ville} ?</p>
            <h3>Rencontrons-nous !</h3>
          <div className="dividerCard"></div>
          <p>{state.adresse} </p>
          <p>{state.code_postal + " " + state.ville} </p>
          
          <div className="phoneCard">
            <img src={Phone} alt="telephone" />
            <p>{state.telephone}</p>
          </div>
          <div className="phoneCard">
            <img src={Mail} alt="telephone" />
            <p>Envoyer un mail</p>
          </div>
        </div>
      </div>
      <div className="agenceHoraire">
          <h1>Nos horaires d'ouverture</h1>
          <p>Lundi .......... {state.horaire_lundi} </p>
          <p>Mardi .......... {state.horaire_mardi}</p>
          <p>Mercredi .......... {state.horaire_mercredi}</p>
          <p>Jeudi .......... {state.horaire_jeudi}</p>
          <p>Vendredi .......... {state.horaire_vendredi}</p>
          <p>Samedi .......... {state.horaire_samedi}</p>
      </div>
      <Description />
      <InterLink />
      <Estimation img="assets/estimation.webp" />

      <Footer />
    </div>
  );
}

export default agence;
