
import React from "react";

function Services() {
  return (
    <section id="services">
      <div className="section-text">
        <div className="section-text__title-centered">
          How can we help you with Esomelo!
        </div>
        <div className="service-cards">
          <div className="service-card">
            <div className="service-card__icon">
            <ion-icon name="briefcase"></ion-icon>
            </div>
            <div className="service-card__text-container">
              <div className="section-text__title-small">Easily Manage</div>
              <div className="section-text__body">
              A no-code, fully configurable environment for digitalizing academic processes such as registrations, 
              record management, curriculum development, attendance tracking, 
              grading reports, billing, and online payments, just to name a few.
              </div>
            </div>
          </div>

          <div className="service-card active">
            <div className="service-card__icon">
              <ion-icon name="wallet-outline" />
            </div>
            <div className="service-card__text-container">
              <div className="section-text__title-small">
                Get Payments Easily
              </div>
              <div className="section-text__body">
              Sync your financial management with the rest of your educational organization. 
              An integrated billing solution that allows you to have a complete overview of your organization’s financial activity.
              </div>
            </div>
          </div>

          <div className="service-card">
            <div className="service-card__icon">
              <ion-icon name="chatbubble-ellipses-outline" />
            </div>
            <div className="service-card__text-container">
              <div className="section-text__title-small">Quick Data sharing</div>
              <div className="section-text__body">
                Esomelo make it easy from adminstrators teacher and parents to share student and pupils statics .
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
