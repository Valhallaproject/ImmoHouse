import React from "react";
import Header from "../components/common/header/header";
import Banner from "../components/common/banner/banner";
import Search from "../components/common/search/search";
import Apropos from "../components/home/apropos/apropos";
import Divider from "../components/common/divider/divider";
import Chriffres from "../components/home/chiffres/chriffres";
import Description from "../components/home/description/description";
import InterLink from "../components/home/interLink/interLink";
import Estimation from "../components/home/estimation/estimation";
import Footer from "../components/common/footer/footer";

function home() {
  return (
    <div>
      <Header />
      <Banner title="ImmoHouse" image="assets/banner.webp" />
      <Search />
      <Apropos />
      <Divider />
      <Chriffres />
      <Description />
      <InterLink />
      <Estimation img="assets/estimation.webp" />
      <Footer />
    </div>
  );
}

export default home;
