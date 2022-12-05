import React from "react";
import Header from "../components/common/header/header";
import Banner from "../components/common/banner/banner";
import Contact from "../components/contact/contact";
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
      <Contact img="assets/bandeauContact.webp" />
      <Footer />
    </div>
  );
}

export default contact;
