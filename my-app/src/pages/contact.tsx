import React from "react";
import Header from "../components/common/header/header";
import Banner from "../components/common/banner/banner";
import Footer from "../components/common/footer/footer";
import AgenceList from "../components/agence/agencesList/agenceList";

function contact() {
  return (
    <div>
      <Header />
      <Banner
        title="À la rencontre de nos équipes,
nous vous accompagnons dans vos projets immobiliers"
image="assets/banner.webp"
      />
      <AgenceList />
      <Footer />
    </div>
  );
}

export default contact;
