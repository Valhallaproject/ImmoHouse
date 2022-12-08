import React, { useState } from "react";
import Input from "../input/input";
import "./contactCard.css";

function contactCard() {
  const [open, setOpen] = useState(false);
  const [openValidation, setOpenValidation] = useState(false);

  const handleCloseValidation = () => {
    setOpenValidation(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpenValidation = () => {
    setOpenValidation(true);
    setOpen(false);
  };

  return (
    <div className="contactCard">
      <h2>Vous souhaitez vendre votre bien ?</h2>
      <div className="contactAction">
        <button className="contactSubmit" onClick={handleOpen}>
          Contactez-nous
        </button>
      </div>
      {open && (
        <div className="popup-container">
          <div className="popup-body">
            <div className="popup-header">
              <h2>Me recontacter</h2>
              <button onClick={handleClose}> X</button>
            </div>
            <p>
              Merci de remplir le formulaire, nous reviendrons vers vous dans le
              plus brefs délais.
            </p>
            <div>
              <div className="popup-input">
                <Input
                  id="name"
                  name="name"
                  value=""
                  placeholder="Nom"
                  type="text"
                  className="inputPopupContact"
                />
                <Input
                  id="name"
                  name="name"
                  value=""
                  placeholder="Prénom"
                  type="text"
                  className="inputPopupContact"
                />
              </div>
              <div className="popup-input">
                <Input
                  id="name"
                  name="name"
                  value=""
                  placeholder="Téléphone"
                  type="text"
                  className="inputPopupContact"
                />
                <Input
                  id="name"
                  name="name"
                  value=""
                  placeholder="E mail"
                  type="text"
                  className="inputPopupContact"
                />
              </div>
              <textarea
                id="name"
                name="name"
                value=""
                placeholder="Votre message"
                className="textareaPopupContact"
              />
              <div className="popup-button">
                <button onClick={handleOpenValidation}>Envoyer</button>
              </div>
            </div>
          </div>
        </div>
      )}
      {openValidation && (
        <div>
          <div className="popup-container">
            <div className="popup-body-validation">
              <div className="popup-header">
                <h2>
                  Votre demande à bien été envoyer
                </h2>
                <button onClick={handleCloseValidation}> X</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default contactCard;
