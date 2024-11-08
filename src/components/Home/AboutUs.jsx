import React from "react";
import  thumbnail  from "../../assets/thumbnail.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import background_bus from "../../assets/background_bus.jpg"

const AboutUs = () => {
  return (
    <>
      <div className="about-us-container">
        <h2 className="about-us-heading">About - BASS TRAVELS</h2>
        <hr  className="about-hr"/>
        <div className="about-us-content">
          <div className="text-section">
            <p>
              BASS TRAVELS – a leading tours and travels agency in Pondicherry
              with over ten years of experience specializes in organizing tours
              and offering fleet & taxi services. We have gathered significant
              knowledge and exposure to design and offer you the best services
              and meet your requirements perfectly.<br></br>
              <br></br>
               We also accommodate custom
              trip requests to offer you the best we can at reasonable fares.
              Our professional drivers will guide and support you to ensure that
              your journey turns out to be a comfortable experience.
            </p>
            <button className="learnmore">Learn More<FontAwesomeIcon icon={faAngleRight} style={{marginLeft:"5px"}}/></button>
          </div>
          <div className="image-section">
            <img src={thumbnail} alt="Bass Travels" />
          </div>
        </div>
      </div>

      <div className="booking-section">
  <img src={background_bus} alt="Background Bus" />
  <div className="content-wrapper">
    <h2>Book Online Now to Enjoy Comfort Travel!</h2>
    <hr />
    <p>Call us: +91 94432 79915 | Email: bookings@basstravels.in</p>
    <button>BOOK NOW <FontAwesomeIcon icon={faAngleRight} /></button>
  </div>
</div>

    </>
  );
};

export default AboutUs;
