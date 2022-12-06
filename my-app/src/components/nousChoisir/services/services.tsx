import React from 'react'
import Icons from '../icons/icons'
import "./services.css"

function Services() {
  return (
    <div className="services">
        <h2>Des services à forte valeur ajoutée</h2>
        <div className="iconsList">
            <Icons image="assets/visites.png" text="Visites virtuelles" />
            <Icons image="assets/photo.png" text="Photographies professionnelles" />
            <Icons image="assets/plan.png" text="Plans 2D et 3D" />
            <Icons image="assets/devis.png" text="Devis travaux" />
            <Icons image="assets/diffusion.png" text="Multidiffusion des annonces en multilingue" />
            <Icons image="assets/homestaging.png" text="Home staging" />
        </div>

    </div>
  )
}

export default Services