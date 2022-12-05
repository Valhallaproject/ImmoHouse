import React from "react";
import Chiffre from "../../common/chiffre/chiffre";
import "./chiffres.css";

function chriffres() {
  return (
    <div className="chiffres">
      <h2>
        <span>ImmoHouse </span>en quelques chiffres
      </h2>
      <div className="blockChiffres">
        <Chiffre number={45} text="ans de service" />
        <Chiffre number={500} text="immeubles en qualité de syndic" />
        <Chiffre number={3000} text="lots sous gestion" />
        <Chiffre number={45} text="collaborateurs à vos côtés" />
      </div>
    </div>
  );
}

export default chriffres;
