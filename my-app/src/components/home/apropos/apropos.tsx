import React from 'react'
import Button from '../../common/button/button'
import ProposPhoto from "./../../../assets/photo1.webp"
import "./apropos.css"

function apropos() {
  return (
    <div className="propos">
        <div className="proposLeft">
            <img src={ProposPhoto} alt="" />
        </div>
        <div className="proposRight">
            <h2><span>ImmoHouse</span>, votre partenaire immobilier depuis 1974</h2>
            <p>Administrateur de biens dans la France entière depuis plus de quarante ans, Isambert réunit tous les métiers de l’immobilier au sein d’une structure à taille humaine. Forts de ces quatre décennies d'expérience, nous donnons vie à vos projets immobiliers. Pour cela, nous accompagnons chaque dossier d'achat ou de vente, en y apportant un suivi rigoureux.</p>
            <p>Société familiale fondée à Paris en 1974, Isambert poursuit ainsi son développement avec six agences situées en France. Une pérennité qui fait notre fierté et qui nous permet de nous démarquer. À ce jour, ce sont plus de 25 000 clients qui nous ont fait confiance. Les compétences que nous allouons aux propriétaires vendeurs, comme aux acquéreurs, sont vastes :</p>
            <ul>
                <li>• Administration de biens</li>
                <li>• Mise en copropriété</li>
                <li>• Promotion, rénovation</li>
                <li>• Syndic de copropriété</li>
                <li>• Gestion locative</li>
                <li>• Vente et location</li>
                <li>• Immobilier Commercial</li>
                <li>• Investissement</li>
            </ul>
            <p>Choisir notre agence, c'est être accompagné de A à Z dans le projet transactionnel qui vous attend. Faites le choix du sérieux et du sur-mesure en vous appuyant sur le talent de conseillers dédiés.</p>
            <Button title="Nous contacter" link="contact#container" />

        </div>
    </div>
  )
}

export default apropos