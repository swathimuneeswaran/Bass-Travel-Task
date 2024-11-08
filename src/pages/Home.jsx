import React,{useState} from "react";
import "../styles/Home.css";


import Navbar from "../components/Navbar";
import Carousel from "../components/Home/Carousel";
import Facility from "../components/Home/Facility";
import Booking from "../components/Home/Booking";
import Fleets from "../components/Home/Fleets";
import AboutUs from "../components/Home/AboutUs";
import Gallery from "../components/Home/Galllery";
import Footer from "../components/Footer";

const Home = () => {
   
  return (
    <>
      
    <Navbar />
    <Carousel />
    <Facility />
    <Booking />
    <Fleets />
    <AboutUs />
    <Gallery />
    <Footer />


    
    </>
  );
};

export default Home;
