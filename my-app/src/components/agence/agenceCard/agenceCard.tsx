import React from "react";
import Phone from "./../../../assets/phone.png"
import Mail from "./../../../assets/mail.png"
import "./agenceCard.css";

interface AgenceCardProps {
  image: string;
  city: string;
  phone: number;
  code: number;
  adresse: string;
}

const agenceCard = ({ image, city, phone, adresse, code }: AgenceCardProps) => (
    
  <div>
    <div
      className="agenceCardImage"
      style={{
        backgroundImage: `url(" ${image} ")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></div>
    <div className="agenceCardInfo">
      <h3>
        <span>ImmoHouse </span>
        {city}
      </h3>
      <p>{adresse} </p>
      <p>{code + " " + city} </p>
      <div className="dividerCard"></div>
      <div className="phoneCard">
        <img src={Phone} alt="telephone" />
        <p>{phone}</p>
      </div>
      <div className="phoneCard">
        <img src={Mail} alt="telephone" />
        <p>Envoyer un mail</p>
      </div>

    </div>
  </div>
);

export default agenceCard;
