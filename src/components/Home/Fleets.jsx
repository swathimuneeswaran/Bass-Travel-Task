import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import car1 from "../../assets/car1.png";
import car2 from "../../assets/car2.png";
import car3 from "../../assets/car3.png";
import car4 from "../../assets/car4.png";
import car5 from "../../assets/car5.png";
import bus2 from "../../assets/bus2.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const cars = [
  { name: "Innova", price: "From Rs.12", seater: "7 Seater", bags: "9 Bags", image: car1 },
  { name: "Etios", price: "From Rs.9", seater: "4 Seater", bags: "6 Bags", image: car2 },
  { name: "Indigo", price: "From Rs.8.50", seater: "4 Seater", bags: "6 Bags", image: car3 },
  { name: "Deluxe Mini-Bus", price: "From Rs.12", seater: "37 Seater", bags: "42 Bags", image: car4 },
  { name: "Luxury Coach", price: "From Rs.15", seater: "54 Seater", bags: "60 Bags", image: car5 },
  { name: "17S Tempo Traveller", price: "From Rs.20", seater: "17 Seater", bags: "20 Bags", image: bus2 }
];

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 4 },
  desktop: { breakpoint: { max: 1024, min: 768 }, items: 2 },
  tablet: { breakpoint: { max: 768, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
};

const Fleets = () => {
  const [showArrows, setShowArrows] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowArrows(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fleet-container">
      <h3>Our Fleet</h3>
      <hr  className='fleet-hr'/>
      <p>Choose from our wide range of luxury and budgeted fleet to meet your travel needs.</p>

      <Carousel
        responsive={responsive}
        showDots={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        arrows={false}
        renderDotsOutside={true}
        customButtonGroup={<CustomButtonGroup showArrows={showArrows} />}
      >
        {cars.map((car, index) => (
          <div key={index} className="outer-card-container">
            <div className="fleet-card">
              <img src={car.image} alt={car.name} className="fleet-image" />
              <button className="price-button">{car.price}</button>
              <h4 className="car-name">{car.name}</h4>
              <hr />
              <p><FontAwesomeIcon icon={faCheck}  style={{color:"#145a9c"}}/> {car.seater}</p>
              <p><FontAwesomeIcon icon={faCheck} style={{color:"#145a9c"}} /> {car.bags}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

const CustomButtonGroup = ({ next, previous, showArrows }) => (
  <div className={`custom-arrows ${showArrows ? "" : "hidden"}`}>
    <button className="custom-arrow prev" onClick={previous}>
      ‹
    </button>
    <button className="custom-arrow next" onClick={next}>
      ›
    </button>
  </div>
);

export default Fleets;
