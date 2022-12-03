import React from "react";

function Features() {
  return (
    <section id="features">
      <div className="container">
        <div className="section-image__small">
          <img src="./images/best-features.webp" alt="features" />
        </div>
        <div className="section-text">
          <div className="section-text__title">
            Some of the best features Of Our App!
          </div>

          <div className="row">
            <div className="feature-box col-50">
              <div className="section-text__title-small">Admissions</div>
              <div className="section-text__body">
              Create a paperless admission process for your educational organization.
              </div>
            </div>

            <div className="feature-box col-50">
              <div className="section-text__title-small">Billing</div>
              <div className="section-text__body">
              Sync your financial management with your academic activities.
              </div>
            </div>
          </div>

          <div className="row">
            <div className="feature-box col-50">
              <div className="section-text__title-small">Academics & LMS</div>
              <div className="section-text__body">
              Access the most advanced tools for managing day-to-day academic activity.
              </div>
            </div>

            <div className="feature-box col-50">
              <div className="section-text__title-small">Mobile Apps</div>
              <div className="section-text__body">
              Android and iOS Apps for Admin,Students, Parents and Teachers.
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
