import React from "react";

function HeroBanner() {
  return (
    <section id="home">
      <div className="container">
        <div className="home-text">
          <div className="section-text__subtitle">Simplified School Management</div>
          <div className="section-text__title-big">
            Get things done with Esomelo App
          </div>
          <div className="section-text__body">
          Automate school administration, Generate insightful reports, 
          Make better & faster decisions all in a centralized Web-based platform & Mobile App.
          </div>
          <a href="#download" className="download-btn">
            Download App
          </a>
        </div>

        <div className="section-image">
          <img src="./images/hero_right.webp" alt="app preview" />
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
