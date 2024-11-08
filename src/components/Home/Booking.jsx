import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Booking = () => {
  const [activeSection, setActiveSection] = useState("distance");

  return (
    <div className="booking-container">
      <div className="tabs">
        <div
          className={`tab ${activeSection === "distance" ? "active" : ""}`}
          onClick={() => setActiveSection("distance")}
        >
          Distance
        </div>
        <div
          className={`tab ${activeSection === "flatRate" ? "active" : ""}`}
          onClick={() => setActiveSection("flatRate")}
        >
          Flat Rate
        </div>
      </div>

      <div className="tab-content">
        {activeSection === "distance" && (
          <div className="form-section">
            <div className="form-row">
              <label>Pick Up Address</label>
              <input type="text" placeholder="Enter a location" />
            </div>
            <div className="form-row">
              <label>Drop Off Address</label>
              <input type="text" placeholder="Enter a location" />
            </div>
            <div className="form-row">
              <label>Pick Up Date</label>
              <input type="date" />
            </div>
            <div className="form-row">
              <label>Pick Up Time</label>
              <div className="time-inputs">
                <input type="number" placeholder="HH" />
                <input type="number" placeholder="MM" />
              </div>
            </div>
            <div className="button-container">
            <button className="book-button">
              BOOK NOW <FontAwesomeIcon icon={faAngleRight} />
            </button>
            </div>
          </div>
        )}

        {activeSection === "flatRate" && (
          <div className="form-section">
            <div className="form-row">
              <label>Trip</label>
              <input type="text" placeholder="Enter trip details" />
            </div>
            <div className="form-row">
              <label>Pick Up Time</label>
              <div className="time-inputs">
                <input type="number" placeholder="HH" />
                <input type="number" placeholder="MM" />
              </div>
            </div>
            <div className="button-container">
            <button className="book-button">
              BOOK NOW <FontAwesomeIcon icon={faAngleRight} />
            </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Booking;
