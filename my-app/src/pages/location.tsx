import React from 'react'
import Header from "../components/common/header/header";
import Banner from "../components/common/banner/banner";
import Search from "../components/common/search/search";
import Footer from "../components/common/footer/footer";
import PropertyList from '../components/location/propertyList/propertyList';
import Estimation from '../components/home/estimation/estimation';



function location() {
  return (
    <div>
      <Header />
      <Banner title="Biens en vente" image="assets/location.webp"/>
      <Search />
      <PropertyList />
      <Estimation img="assets/estimation.webp" />
      <Footer />

    </div>
  )
}

export default location