import React, { useState} from "react";
import Input from "./../input/input";
import "./search.css";

function search() {

  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");
  const [selectedOption3, setSelectedOption3] = useState("");
  const [selectedOption4, setSelectedOption4] = useState("");


  const handleOption1Change = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setSelectedOption1(e.target.value);
  };

  const handleOption2Change = (e: { target: { value: React.SetStateAction<string>; }; }) =>  {
    setSelectedOption2(e.target.value);
  };

  const handleOption3Change = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setSelectedOption3(e.target.value);
  };

  const handleOption4Change = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setSelectedOption4(e.target.value);
  };

  const handleSubmit = () => {
    console.log("test submit")
  }

  return (
    <div className="search">
      <select className="select" id="option1" value={selectedOption1} onChange={handleOption1Change}>
        <option value="a">Vente</option>
        <option value="b">Location</option>
      </select>
      <select className="select" id="option2" value={selectedOption2} onChange={handleOption2Change}>
        <option value="a">Appartement</option>
        <option value="b">Maison</option>
        <option value="c">Terrain</option>
      </select>
      
      <Input id="budget" name="budget" placeholder="Budget max" value={selectedOption3} type="text" className="input" onChange={handleOption3Change}/>
      <Input id="surface" name="surface" placeholder="Surface min" value={selectedOption4} type="text" className="input" onChange={handleOption4Change}/>
      <button id="submit" className="submit" onClick={handleSubmit}>Rechercher</button>


    </div>
  );
}

export default search;
