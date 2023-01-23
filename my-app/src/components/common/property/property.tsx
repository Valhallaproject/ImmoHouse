import React from "react";
import "./property.css";

interface PropertyProps {
  images: string;
  city: string;
  prix: number;
  name: string;
  surface: number;
  descriptif: string;
  room: number;
  bedrooms: number;
  cave: string;
  chauffage: string;
  thumbnail: string
}

const Property = ({thumbnail, images, surface, city, prix, chauffage, name, descriptif, room, bedrooms, cave }: PropertyProps) => (
  <div>
    <div className="image">
      <div className="thumbnail">
        <img src={thumbnail} alt="" />
      </div>
      <div className="gallerie">
        {images}
      </div>
    </div>
    <div className="titleProperty">
      <p>{name}</p>
      <p>{prix}</p>
    </div>
    <div className="propertyInfo">
      <div className="propertyDescriptif">
        <h2>Descriptif du bien</h2>
        <div className="local">
          <p>
            Localisation : <span>{city}</span>
          </p>
          <p>
            Surface : <span>{surface} m2</span>
          </p>
        </div>
        <p>{descriptif}</p>
      </div>
      <div className="propertyCaracteristique">
        <h2>Caractéristiques techniques</h2>
        <div className="essai">
          <p>Localisation :</p>
          <div className="dividertest"></div>
          <p>{city}</p>
        </div>
        <div className="essai">
          <p>Chambres : </p>
          <div className="dividertest"></div>
          <p>{bedrooms}</p>
        </div>
        <div className="essai">
          <p>Séjour : </p>
          <div className="dividertest"></div>
          <p>{room}</p>
        </div>
        <div className="essai">
          <p>Chauffage : </p>
          <div className="dividertest"></div>
          <p>{chauffage}</p>
        </div>

        <div className="essai">
          <p>Cave : </p>
          <div className="dividertest"></div>
          <p>{cave}</p>
        </div>



      </div>
    </div>
  </div>
);

export default Property;
