import React, { useEffect, useState } from "react";
import axios from "axios";
import AgenceCard from "../agenceCard/agenceCard";
import "./agenceList.css"

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
        <AgenceCard
          code={cards.code_postal}
          image={"http://localhost:8055/assets/" + cards.image}
          phone={cards.telephone}
          city={cards.ville}
          adresse={cards.adresse}
        />
    );
  });

  return <div className="agenceList">{showAgence}</div>;
}

export default agenceList;
