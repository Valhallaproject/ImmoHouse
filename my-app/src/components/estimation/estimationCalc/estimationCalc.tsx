import React, { ChangeEvent, useState } from "react";
import Input from "../../common/input/input";
import "./estimationCalc.css";

function estimationCalc() {
  const [showSuivant, setShowSuivant] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showCalc, setShowCalc] = useState(true);
  const [openValidation, setOpenValidation] = useState(false);


  const handleChange = () => {
    setShowSuivant(true);
  };

  const handleOpen = () => {
    setOpenValidation(true);
  };

  const handleClick = () => {
    setShowForm(true);
    setShowCalc(false);
  };
  const handleCloseValidation = () => {
    setOpenValidation(false);
    setShowForm(false);
    setShowCalc(true);


  };



  return (
    <>
      <div className="estimationCalc">
        <h2>
          Appelez-nous au 01 44 19 00 00 ou complétez les informations suivantes
          pour demander votre estimation
        </h2>

        <div className="calcCard">
          <div className="calcEtapes">
            <div className="etapes">
              <div className="etapeNumber">
                <p>1</p>
              </div>
              <p>Votre bien</p>
            </div>
            <div className="calcDivider"></div>
            <div className="etapes">
              <div className="etapeNumber">
                <p>2</p>
              </div>
              <p>Vos coordonnées</p>
            </div>
          </div>
          {showCalc && (
            <>
              <p>Vous souhaitez faire estimer :</p>
              <div>
                <form>
                  <label>
                    <input type="radio" name="radio" onChange={handleChange} />
                    <div className="appartement box">
                      <span>Appartement</span>
                    </div>
                  </label>
                  <label>
                    <input type="radio" name="radio" onChange={handleChange} />
                    <div className="maison box">
                      <span>Maison</span>
                    </div>
                  </label>
                  <div className="suivant">
                    {showSuivant && (
                      <button name="Suivant" onClick={handleClick}>
                        Suivant
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </>
          )}
        </div>
      </div>

      {showForm && (
        <div className="estimationForm">
          <div className="formCard">
            <select className="estimationInput">
              <option value="a">Appartement</option>
              <option value="b">Maison</option>
              <option value="b">Terrain</option>
            </select>
            <Input
              id="name"
              name="name"
              placeholder="Nom "
              type="text"
              className="estimationInput" value={undefined} onChange={function (event: ChangeEvent<HTMLInputElement>): void {
                throw new Error("Function not implemented.");
              } }            />
            <Input
              id="name"
              name="name"
              placeholder="Prénom "
              type="text"
              className="estimationInput" value={undefined} onChange={function (event: ChangeEvent<HTMLInputElement>): void {
                throw new Error("Function not implemented.");
              } }            />
            <Input
              id="name"
              name="name"
              placeholder="Téléphone "
              type="text"
              className="estimationInput" value={undefined} onChange={function (event: ChangeEvent<HTMLInputElement>): void {
                throw new Error("Function not implemented.");
              } }            />
            <Input
              id="name"
              name="name"
              placeholder="E mail "
              type="mail"
              className="estimationInput" value={undefined} onChange={function (event: ChangeEvent<HTMLInputElement>): void {
                throw new Error("Function not implemented.");
              } }            /><button onClick={handleOpen} className="estimationFormBtn">Valider l'estimation</button>
          </div>
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
      )}
    </>
  );
}

export default estimationCalc;
