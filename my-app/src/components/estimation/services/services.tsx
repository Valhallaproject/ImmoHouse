import React from 'react'
import Icons from './../../nousChoisir/icons/icons'
import "./services.css"

function Services() {
  return (
    <div className="services">
        <h2>Des services à forte valeur ajoutée</h2>
        <div className="iconsList">
            <Icons image="assets/expertise.png" text="Expertise locale" />
            <Icons image="assets/equipe.png" text="Equipe de professionnels expérimentés " />
            <Icons image="assets/transaction.png" text="Références de transactions mises à jour" />
            <Icons image="assets/veille.png" text="Veille concurrentielle permanente" />
            <Icons image="assets/photo.png" text="Outils innovants" />
        </div>

    </div>
  )
}

export default Services