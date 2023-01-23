import React, { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import axios from "axios";
import AgenceCard from "../agenceCard/agenceCard";
import "./agenceList.css"
import "./../agenceCard/agenceCard.css"

function agenceList() {
  const [card, setCard] = useState<any[]>([]);

  let cards = card;


  useEffect(() => {
    axios
      .get(`http://localhost:8055/items/Agence`, {
        headers: {
          Accept: "*/*",
        },
      })
      .then((response) => {
        setCard(response.data.data);
        console.log(response.data.data);
      });
  }, []);

  const showAgence = cards.map((cards) => {
    return (
        <HashLink to={{pathname:"/agence", hash:`#${cards.ville}`}} state={{cards}}  className="agenceCard">
        <AgenceCard
          code={cards.code_postal}
          image={"http://localhost:8055/assets/" + cards.image}
          phone={cards.telephone}
          city={cards.ville}
          adresse={cards.adresse}
        /></HashLink>
        
    );
  });

  return <div className="agenceList">{showAgence}</div>;
}

export default agenceList;
