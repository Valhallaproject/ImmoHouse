import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Arrow from "./../../../assets/arrow.png";

const FullScreenSlider = () => {
  const location = useLocation();
  const state = location.state.sale;
  const imagesList = state.images;

  const vignettes = imagesList.map(
    (image: { directus_files_id: string | undefined }) => {
      return (
        <img
          className="imgSlider"
          src={"http://localhost:8055/assets/" + image.directus_files_id}
          alt=""
        />
      );
    }
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    if (currentIndex === 0) {
      setCurrentIndex(vignettes.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex === vignettes.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="gallerie">
      {vignettes[currentIndex]}
      <div className="actionSlider">
        <button onClick={handlePrevious}>&#8592;</button>
        <button onClick={handleNext}>&#8594;</button>
      </div>
    </div>
  );
};

export default FullScreenSlider;
