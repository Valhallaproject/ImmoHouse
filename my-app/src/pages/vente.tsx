import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/common/header/header";
import BannerProperty from "../components/common/bannerProperty/bannerProperty";
import Footer from "../components/common/footer/footer";
import Estimation from "../components/home/estimation/estimation";
import "./styles.css";
import Property from "../components/common/property/property";

function vente() {
  const location = useLocation();
  const state = location.state.sale;
  const imagesList = state.images

  const vignettes = imagesList.map((image: { directus_files_id: string | undefined; }) => {
    return(
      <img src={"http://localhost:8055/assets/" + image.directus_files_id} alt="" />
    )
  })
    

  return (
    <div id={state.title}>
      <Header />
      <BannerProperty />
      <div className="test">
        <Property
          images={vignettes}
          thumbnail={"http://localhost:8055/assets/" + state.thumbnail}
          chauffage={state.chauffage}
          city={state.city.name}
          prix={state.price}
          name={state.title}
          surface={state.surface}
          descriptif={state.description}
          room={state.rooms}
          bedrooms={state.bedrooms}
          cave={state.cave}
        />
      </div>
      <Estimation img="assets/estimation.webp" />

      <Footer />
    </div>
  );
}

export default vente;
