import React from 'react';
// Ensure you create this CSS file for styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="about-us">
          <h3>About Us</h3>
          <hr  className='foot-about-hr'/>
          <p>
            BASS TRAVELS is a leading tours and travels agency in Pondicherry. With over 10 years of experience in organizing tours and providing fleet services, we have gathered significant knowledge in designing and offering you the best tour packages to meet your requirements perfectly.
          </p>
          <p>
            BASS TRAVELS also offers a wide range of travel services – high-tech fleet services for private tours, seasonal temple tours, educational tours, corporate holiday outings, business tours, and wedding trips. Our objective is to offer our clients a safe, comfortable, and happy journey experience!
          </p>
        </div>
        <div className="quick-links">
          <h3>QUICK LINKS</h3>
          <hr className='quick-hr' />
          <ul>
            <li><a href="#travel-policy">Travel Policy</a></li>
            <li><a href="#faqs">F.A.Q’s</a></li>
            <li><a href="#privacy-policy">Privacy Policy</a></li>
            <li><a href="#feedback-form">Feedback Form</a></li>
            <li><a href="#contact-details">Contact Details</a></li>
          </ul>
        </div>
        <div className="contact-details">
          <h3>Contact Details</h3>
          <hr className='contact-hr' />
          <p>#20,21, ECR, 100FT, ROAD,<br></br> KARUVADIKUPPAM, PONDICHERRY-605008</p>
          <p>+919443279915 | +919791855051</p>
          <p>Mon-Sat | 7.00 a.m. - 10.30 p.m.</p>
          <p>bookings@basstravels.in</p>
          <p>We respond within 3 hours.</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 BASS TRAVELS. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
