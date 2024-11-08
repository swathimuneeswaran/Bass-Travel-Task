import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarCheck,
  faShieldHalved,
  faBusSimple,
  faIdCard,
  faAngleRight
} from "@fortawesome/free-solid-svg-icons";


const Facility = () => {
  return (
    <>
    <div className="facility-container">
      <div className="facility-box">
        <div className="icon-wrapper">
          <FontAwesomeIcon icon={faCalendarCheck} size="2x" style={{color:"#1E73BE"}} />
        </div>
        <div>
          <h2>
           
            Easy Online Booking
            <hr />
          </h2>
          <p>
            Just fill up basic details and choose the dates on our reservation
            form in this website to book your travel needs.
          </p>
        </div>
      </div>
      <div className="facility-box">
        <div className="icon-wrapper">
          <FontAwesomeIcon icon={faIdCard} size="2x" style={{color:"#1E73BE"}} />
        </div>
        <div>
          <h2>
           
            Professional Drivers
            <hr />
          </h2>
          <p>
            Our drivers are not only professional but also very supportive to
            ensure your journey is totally comfortable.
          </p>
        </div>
      </div>
      <div className="facility-box">
        <div className="icon-wrapper">
          <FontAwesomeIcon icon={faBusSimple} size="2x" style={{color:"#1E73BE"}} />
        </div>
        <div>
          <h2>
           
            Wide Fleet of Vehicles
            <hr />
          </h2>
          <p>
            All our fleet are in perfect condition before the journey to provide
            you a safe and pleasant travel experience.
          </p>
        </div>
      </div>
      <div className="facility-box">
        <div className="icon-wrapper">
          <FontAwesomeIcon icon={faShieldHalved} size="2x" style={{color:"#1E73BE"}} />
        </div>
        <div>
          <h2>
           
            Free Travel Insurance
            <hr />
          </h2>
          <p>
            Enjoy your travel in comfort with our free travel insurance that
            offers life coverage up to Rs. 2 Lacs. Conditions apply.
          </p>
        </div>
      </div>
    </div>

   
   </>
    
  );
};

export default Facility;
