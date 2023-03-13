import React, { useState, useEffect } from "react";
import axios from "axios";
import PropertyCard from "../../common/propertyCard/propertyCard";
import "./propertyList.css";
import "./../../common/propertyCard/propertyCard.css"
import { HashLink } from 'react-router-hash-link';

function propertyList() {
  const [card, setCard] = useState<any[]>([]);
  let [selectedType, setSelectedType] = useState<string>("1");
  let [selectedPrice, setSelectedPrice] = useState<string>("");

  let type: string;
  if (selectedType === "1") {
    type = "";
  } else if (selectedType !== "1") {
    type = `&filter[type]=${selectedType}`;
  }
  
  useEffect(() => {
    axios
      .get(`http://localhost:8055/items/product?fields=title,thumbnail,description,cave,rooms,bedrooms,id,chauffage,images.directus_files_id,surface,price,city.name&filter[condition]=1${type}`, {
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

  let sale = card;

  const handleChangePrice = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPrice(event.target.value);
  };

  if(selectedPrice === "b"){
    sale.sort((a,b) =>( a.price> b.price ? 1 : -1 ))
  }else if(selectedPrice === "c"){
    sale.sort((a,b) =>( a.price> b.price ? -1 : 11 ))
  }

  const showCards = sale.map((sale) => {
    return (
      <HashLink to={{pathname:"/vente", hash:`#${sale.title}`}} className="propertyCard" state={{sale}}>
      <PropertyCard
        name={sale.title}
        image={"http://localhost:8055/assets/" + sale.thumbnail}
        prix={sale.price}
        city={sale.city.name}
      /></HashLink>
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
        <select className="select" value={selectedPrice} onChange={handleChangePrice}>
          <option value="">Trier par</option>
          <option value="b">Prix croissant</option>
          <option value="c">Prix décroissant</option>
        </select>
      </div>

      <div className="propertyCardList">{showCards}</div>
    </div>
  );
}

export default propertyList;
