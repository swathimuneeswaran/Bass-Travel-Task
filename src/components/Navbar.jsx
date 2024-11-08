import React, { useEffect, useState } from 'react';
import bass_logo from "../assets/bass_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck, faAngleRight, faMagnifyingGlass, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [selected, setSelected] = useState("Home");
  const [isOpen, setIsOpen] = useState(false); // For mobile menu toggle

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 110;
      setIsFixed(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (item) => {
    setSelected(item);
    if (window.innerWidth <= 900) {
      setIsOpen(false); // Close the menu when a menu item is clicked on mobile
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the mobile menu
  };

  return (
    <>
      <div className="home-container">
        <img src={bass_logo} alt="Bass Logo" />
        <div className="icon-container">
          <FontAwesomeIcon style={{ color: "#1E73BE" }} icon={faSquareCheck} />
          <div className="text-content">
            <h4>Corporate/Family Tours</h4>
            <p>Comfort Travel Assured</p>
          </div>
        </div>

        <div className="icon-container">
          <FontAwesomeIcon style={{ color: "#1E73BE" }} icon={faSquareCheck} />
          <div className="text-content">
            <h4>Temple & Wedding Tours</h4>
            <p>Organized Easily</p>
          </div>
        </div>

        <div className="icon-container">
          <FontAwesomeIcon style={{ color: "#1E73BE" }} icon={faSquareCheck} />
          <div className="text-content">
            <h4>Educational Tours</h4>
            <p>Arranged Instantly</p>
          </div>
        </div>

        <button>
          BOOK NOW <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>

      <div className={`navbar-container ${isFixed ? 'fixed' : ''} ${isOpen ? 'expanded' : ''}`}>
        <nav className="navbar">
          <div className="navbar-items">
            {["Home", "About", "Fleet", "Fares", "Booking", "Contact"].map((item) => (
              <p
                key={item}
                className={selected === item ? 'active' : ''}
                onClick={() => handleNavClick(item)}
              >
                {item}
              </p>
            ))}
          </div>
          <div className="navbar-search">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
          <div className="hamburger" onClick={toggleMenu}>
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
          <div className="close-icon" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faTimes} />
          </div>
          {["Home", "About", "Fleet", "Fares", "Booking", "Contact"].map((item) => (
            <p
              key={item}
              className={selected === item ? 'active' : ''}
              onClick={() => handleNavClick(item)}
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
