import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import B1 from "../../assets/B1.jpg";
import B2 from "../../assets/B2.jpg";
import S1 from "../../assets/S1.jpg";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

// Custom Previous Arrow
const PrevArrow = ({ onClick }) => (
  <div className="custom-arrow prev-arrow" onClick={onClick}>
    <FontAwesomeIcon icon={faAngleLeft} />
  </div>
);

// Custom Next Arrow
const NextArrow = ({ onClick }) => (
  <div className="custom-arrow next-arrow" onClick={onClick}>
    <FontAwesomeIcon icon={faAngleRight} />
  </div>
);



const settings = {
  dots: false,
  arrows:true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  prevArrow: <PrevArrow />, // Add custom previous arrow
  nextArrow: <NextArrow />, // Add custom next arrow
};

const Carousel = () => {
  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div className="slide-content left-align">
          <img src={S1} alt="Slide 1" />
          <div className="text-overlay">
            <h1>Travel In Luxury</h1>
            <p>Book your tours from our wide fleet range of luxury coaches,<br></br> mini-buses, and vans designed for comfortable travel experience!</p>
            <button>
              Book Now <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>
        </div>
        <div className="slide-content center-align">
          <img src={B1} alt="Slide 2" />
          <div className="text-overlay">
            <h1>Welcome to BASS TRAVELS!</h1>
            <p>We are an Exclusive Tours & Travels Agency.<br></br> We offer luxury buses, deluxe vans & premium cars on tour & holiday rentals!</p>
            <button className='button2'>
              About BASS TRAVELS! <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>
        </div>
        <div className="slide-content center-align" >
          <img src={B2} alt="Slide 3" />
          <div className="text-overlay">
            <h1 style={{color:"#00FFFA"}}> Re-define your Travel Experience!</h1>
            <p style={{color:"#00FFFA"}}>Choose from our fleet of A.C. Buses, Vans & Cars<br></br> for family trips, airport transit, wedding functions, corporate holidays, sightseeing, temple & educational tours!</p>
            <button className='button2'>
             Explore Our Fleet<FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
