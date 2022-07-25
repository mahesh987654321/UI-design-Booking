import React from "react";
import Fetured from "../../Components/featured/Fetured";
import FeaturedProperties from "../../Components/FeaturedProperties/FeaturedProperties";
import Footer from "../../Components/footer/Footer";
// import FeaturedPropertyList from "../../Components/FeaturedProperties/featuredPropertyList";
import Header from "../../Components/header/Header";
import MailList from "../../Components/MailList/MailList";
import Navbar from "../../Components/navbar/Navbar";
import Propertylist from "../../Components/propertyList/Propertylist";
import "./home.css";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Fetured />
        <h1 className="homeTitle">Browse by property type</h1>
        <Propertylist />
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
