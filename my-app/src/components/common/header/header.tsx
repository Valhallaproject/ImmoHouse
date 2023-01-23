import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Burger from "./../../../assets/menu.png";
import Close from "./../../../assets/close-white.png";
import "./header.css";

const Navbar = () => {
  const [mobileNavIcon, setMobileNavIcon] = useState(Burger);

  const toggleMobileNav = () => {
    let mobileNav: any = document.querySelector(".navItems");
    mobileNav.classList.toggle("active");
    mobileNav.classList.contains("active")
      ? setMobileNavIcon(Close)
      : setMobileNavIcon(Burger);
  };

  return (
    <nav id="nav">
      <div className="navItems">
        <ul className="items">
          <NavLink to="/">
            <Link to="/">Accueil</Link>
          </NavLink>
          <NavLink to="/vendre">
            <Link to="/vendre">Vendre</Link>
          </NavLink>
          <NavLink to="/acheter">
            <Link to="/acheter">Acheter</Link>
          </NavLink>
          <NavLink to="/louer">
            <Link to="/louer">Louer</Link>
          </NavLink>
          <NavLink to="/contact">
            <Link to="/contact">Contact</Link>
          </NavLink>
        </ul>
      </div>
      <button className="mobilNav">
        <img
          onClick={toggleMobileNav}
          src={mobileNavIcon}
          alt="mobileNavIcon"
        />
      </button>
    </nav>
  );
};

export default Navbar;
