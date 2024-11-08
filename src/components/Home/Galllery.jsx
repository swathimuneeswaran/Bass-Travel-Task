import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import car1 from "../../assets/car1.png";
import car2 from "../../assets/car2.png";
import car3 from "../../assets/car3.png";
import car4 from "../../assets/car4.png";
import car5 from "../../assets/car5.png";
import bus2 from "../../assets/bus2.png";
import bus4 from "../../assets/bus4.png";
import bus5 from "../../assets/bus5.png";
import bus1 from "../../assets/bus1.png";
import kamal from "../../assets/kamal.jpg";
import mike from "../../assets/mike.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Gallery = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1, // Show 1 item per slide
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="gallery-section">
      <div className="fleet-gallery">
        <h2>Fleet Gallery</h2>
        <hr className='gallery-hr' />
        <div className="gallery-images">
          <img src={car1} alt="car1" />
          
          <img src={car2} alt="car2" />
          <img src={car3} alt="car3" />
          <img src={car4} alt="car4" />
          <img src={car5} alt="car5" />
          <img src={bus2} alt="bus2" />
          <img src={bus1} alt="bus2" />
          <img src={bus4} alt="bus2" />
          <img src={bus5}  alt="bus2" />

        </div>
      </div>
      <div className="customer-reviews">
        <h2>Customer Opinions</h2>
        <hr className='customer-hr' />
        <Carousel 
          responsive={responsive} 
          infinite={true} 
          autoPlay={true} 
          autoPlaySpeed={3000} 
          showDots={true} 
          arrows={false} // Remove the arrows
        >
          <div className="review-box">
            <p style={{ fontSize: "16px", lineHeight: "1.6", textAlign: "center" }}>
              <FontAwesomeIcon 
                icon={faQuoteLeft} 
                style={{ color: "#145a9c", fontSize: "25px", marginRight: "8px" }} 
              />
              I found BASS TRAVELS very reliable. I could count on them to do our corporate tour as planned, despite the rough weather! They made us feel safe. Highly recommend them!
              <FontAwesomeIcon 
                icon={faQuoteRight} 
                style={{ color: "#145a9c", fontSize: "25px", marginLeft: "8px" }} 
              />
            </p>
            <img src={mike} alt="Mike" style={{ borderRadius: "50%", marginTop: "10px" }} />
            <p className="review-author" style={{ textAlign: "center", marginTop: "10px" }}>Mike Jones - Luxury Coach</p>
          </div>
          <div className="review-box">
            <p style={{ fontSize: "16px", lineHeight: "1.6", textAlign: "center" }}>
              <FontAwesomeIcon 
                icon={faQuoteLeft} 
                style={{ color: "#145a9c", fontSize: "25px", marginRight: "8px" }} 
              />
              BASS TRAVELS is definitely a professional travel agency from my personal experience. Flexible, polite, and safety-conscious drivers are rare to find nowadays! My experience with them was comfortable, and I recommend them!
              <FontAwesomeIcon 
                icon={faQuoteRight} 
                style={{ color: "#145a9c", fontSize: "25px", marginLeft: "8px" }} 
              />
            </p>
            <img src={kamal} alt="Kamal" style={{ borderRadius: "50%", marginTop: "10px" }} />
            <p className="review-author" style={{ textAlign: "center", marginTop: "10px" }}>Kamal Raj - 17S Tempo Traveller</p>
          </div>
          {/* Add more reviews if needed */}
        </Carousel>
      </div>
    </div>
  );
};

export default Gallery;
