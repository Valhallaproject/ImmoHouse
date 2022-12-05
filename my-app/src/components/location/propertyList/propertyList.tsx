import React, { useState, useEffect } from "react";
import axios from "axios";
import PropertyCard from "../../common/propertyCard/propertyCard";

function propertyList() {
  const [card, setCard] = useState<any[]>([]);
  let [selectedType, setSelectedType] = useState<string>("1");
  let [selectedPrice, setSelectedPrice] = useState<string>();

  let type: string;
  if (selectedType === "1") {
    type = "";
  } else if (selectedType !== "1") {
    type = `&filter[type]=${selectedType}`;
  }
  useEffect(() => {
    axios
      .get(`http://localhost:8055/items/product?fields=title,thumbnail,price,city.name&filter[condition]=2${type}`, {
        headers: {
          Accept: "*/*",
        },
      })
      .then((response) => {
        setCard(response.data.data);
      });
  }, [selectedType]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedType(event.target.value);
  };

  let cards = card;

  const handleChangePrice = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPrice(event.target.value);
  };

  if(selectedPrice === "b"){
    cards.sort((a,b) =>( a.price> b.price ? 1 : -1 ))
  }else if(selectedPrice === "c"){
    cards.sort((a,b) =>( a.price> b.price ? -1 : 11 ))
  }

  const showCards = cards.map((cards) => {
    return (
      <PropertyCard
        name={cards.title}
        image={"http://localhost:8055/assets/" + cards.thumbnail}
        prix={cards.price}
        city={cards.city.name}
      />
    );
  });
  return (
    <div className="propertyList">
      <div className="propertySelect">
        <select className="select" value={selectedType} onChange={handleChange}>
          <option value="1">Type de bien</option>
          <option value="2">Maison</option>
          <option value="3">Appartement</option>
          <option value="4">Terrain</option>
        </select>
        <select className="select" value={selectedType} onChange={handleChangePrice}>
          <option value="">Trier par</option>
          <option value="b">Prix croissant</option>
          <option value="b">Prix décroissant</option>
        </select>
      </div>

      <div className="propertyCardList">{showCards}</div>
    </div>
  );
}

export default propertyList;