import React from "react";
import Input from "./../input/input";
import "./search.css";

function search() {
  return (
    <div className="search">
      <select className="select">
        <option value="a">Vente</option>
        <option value="b">Location</option>
      </select>
      <select className="select">
        <option value="a">Appartement</option>
        <option value="b">Maison</option>
        <option value="b">Terrain</option>
      </select>

      <Input id="name" name="name" value="" placeholder="Budget max " type="text" className="input"/>
      <Input id="name" name="name" value="" placeholder="Surface min" type="text" className="input"/>
      <Input id="name" name="name" value="Recherhcer" placeholder="Surface min" type="submit" className="submit"/>


    </div>
  );
}

export default search;
