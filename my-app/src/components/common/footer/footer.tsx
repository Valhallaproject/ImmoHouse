import React from 'react'
import { Link } from 'react-router-dom'
import "./footer.css"

function footer() {
  return (
    <div className="footer">
        <div className="footerLink">
            <h4>Je cherche un bien</h4>
            <Link to="/">Achat maison</Link>
            <Link to="/">Location maisson</Link>
            <Link to="/">Achat appartement</Link>
            <Link to="/">Location appartement</Link>
            <Link to="/">Achat terrain</Link>
            <Link to="/">Location terrain</Link>
        </div>
        <div className="footerLink">
        <h4>Je suis propriétaire</h4>
            <Link to="/">Estimez votre bien</Link>
            <Link to="/">Vendre avec nous</Link>
            <Link to="/">Nous contacter</Link>
        </div>
        <div className="footerLink">
        <h4>Informations</h4>
            <Link to="/">Mentions légales</Link>
            <Link to="/">Politique de confidentialité</Link>
            <Link to="/">Plan du site</Link>
        </div>
    </div>
  )
}

export default footer