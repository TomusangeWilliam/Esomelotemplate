import React from "react";

function Download() {
  return (
    <section id="download">
      <div className="container">
        <div className="section-text">
          <div className="section-text__title_text-white">
            Our App Available For Any Device Download now
          </div>
          <div className="section-text__body text-white">
          Access and manage all the pertinent data from 
          anywhere and everywhere using mobile applications and portals.
          </div>
          <a href="#download" className="download-btn__img">
            <img src="./images/app_btn1.webp" alt="app store" />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.esomeleapp" className="download-btn__img">
            <img src="./images/app_btn2.webp" alt="google play store" />
          </a>
        </div>
        <div className="section-image">
          <img src="./images/available-app.webp" alt="download" />
        </div>
      </div>
    </section>
  );
}

export default Download;
