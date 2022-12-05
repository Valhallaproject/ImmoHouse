import React from "react";
import "./propertyCard.css"

interface PropertyCardProps {
  image: string;
  city: string;
  prix: number;
  name: string;
}

const PropertyCard = ({ image, city, prix, name }: PropertyCardProps) => (
  <div className="propertyCard">
      <div className="propertyImage"
          style={{
            backgroundImage: `url(" ${image} ")`,
            backgroundSize: "cover",
            backgroundPosition: "center"
        }}
    >
          <p>{prix} €</p>
      </div>
      <div className="propertyInfo">
          <h3>{name}</h3>
          <p>{city}</p>
      </div>
  </div>
);

export default PropertyCard;
