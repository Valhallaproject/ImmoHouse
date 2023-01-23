import React from "react";
import Header from "../components/common/header/header";
import Banner from "../components/common/banner/banner";
import Intro from "../components/nousChoisir/intro/intro";
import Footer from "../components/common/footer/footer";
import Contact from "../components/contact/contact";
import Services from "../components/nousChoisir/services/services";

function nousChoisir() {
  return (
    <div id="container">
      <Header />
      <Banner title="Pourquoi nous choisir ?" image="assets/nousChoisir.jpeg" />
      <div className="contenu">
      <Intro image="assets/intro.jpeg"/>
      <Services />
      </div>
      <Contact img="assets/bandeauContact.webp" />

      <Footer />
    </div>
  );
}

export default nousChoisir;