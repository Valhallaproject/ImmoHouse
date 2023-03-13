import React, { useState} from "react";
import { Link } from "react-router-dom";
import Input from "./../input/input";
import "./search.css";

function search() {

  const [selectedOption1, setSelectedOption1] = useState("");

  let LinkChoice = "/acheter" 
  if (selectedOption1 === "b"){
    LinkChoice = "/louer"
  }

  


  const handleOption1Change = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setSelectedOption1(e.target.value);
  };


  const handleSubmit = () => {
    
    
  }

  return (
    <div className="search">
      <select className="select" id="option1" value={selectedOption1} onChange={handleOption1Change}>
        <option value="a">Vente</option>
        <option value="b">Location</option>
      </select>
      
      <button id="submit" className="submit" onClick={handleSubmit}><Link to={LinkChoice} >Rechercher</Link></button>


    </div>
  );
}

export default search;
