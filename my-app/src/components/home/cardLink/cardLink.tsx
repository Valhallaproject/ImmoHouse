import React, { PropsWithChildren } from "react";
import Arrow from "./../../../assets/arrow.png";
import "./cardLink.css";
import { Link } from 'react-router-dom';
import { HashLink  } from 'react-router-hash-link';
interface CardLinkProps {
  img: string;
  title: string;
  link:string
}

const CardLink = ({ title, img, link }: PropsWithChildren<CardLinkProps>) => (
<HashLink to={link} className="cardLink" 
    style={{
        backgroundImage: `url(" ${img} ")`,
    }}>
  <div
    
  >
    
    <div className="cardLinkTitle">
      <h3>{title}</h3>
      <img src={Arrow} alt=""/>
    </div>
  
  </div>  </HashLink>
);

export default CardLink;
