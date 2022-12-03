import React from "react";


function Customers() {
  return (
    <section id="Customers">
      <div className="section-text">
        <div className="section-text__title-esomelo">
        HOW ESOMELO HELPS EDUCATIONAL ORGANIZATIONS MANAGE ACADEMIC PROCESSES
        </div>
        <div className="service-cards">
          <div className="service-card">
            <div className="service-card__icon2">
            <ion-icon name="briefcase"></ion-icon>
            </div>
            <div className="service-card__text-container">
              <div className="section-text__title-small">Easily Manage</div>
              
            </div>
          </div>

          <div className="service-card active">
            <div className="service-card__icon2">
              <ion-icon name="wallet-outline" />
            </div>
            <div className="service-card__text-container">
              <div className="section-text__title-small">
                Get Payments Easily
              </div>
              
            </div>
          </div>

          <div className="service-card">
            <div className="service-card__icon2">
              <ion-icon name="chatbubble-ellipses-outline" />
            </div>
            <div className="service-card__text-container">
              <div className="section-text__title-small">Quick Data sharing</div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export default Customers;