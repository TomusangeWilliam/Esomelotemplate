import React from "react";

function Pricing() {
  return (
    <section id="pricing">
      <div className="pricing-upper">
        <div className="section-text__title-centered text-white">
          Choose Your Very Best Pricing Plan
        </div>
      </div>
      <div className="pricing-lower">
        <div className="pricing-cards">
          <div className="pricing-card">
            <div className="pricing-card__header">
              <span className="pricing-card__subtitle">1 year</span>
              <div className="pricing-card__title">
                UGx200,000<span> /Year</span>
              </div>
            </div>
            <ul className="pricing-card__features">
              <li>Increase traffic 50%</li>
              <li>E-mail support</li>
              <li>10 Free Optimization</li>
              <li>24/7 support</li>
            </ul>
            <a href="#pricing" className="pricing-card__btn">
              Get started
            </a>
          </div>

          <div className="pricing-card">
            <div className="pricing-card__header">
              <span className="pricing-card__subtitle">3 years</span>
              <div className="pricing-card__title">
                $18<span> / month</span>
              </div>
            </div>
            <ul className="pricing-card__features">
              <li>Increase traffic 50%</li>
              <li>E-mail support</li>
              <li>10 Free Optimization</li>
              <li>24/7 support</li>
            </ul>
            <a href="#pricing" className="pricing-card__btn">
              Get started
            </a>
          </div>

          <div className="pricing-card">
            <div className="pricing-card__header">
              <span className="pricing-card__subtitle">4 years</span>
              <div className="pricing-card__title">
                $14<span> / month</span>
              </div>
            </div>
            <ul className="pricing-card__features">
              <li>Increase traffic 50%</li>
              <li>E-mail support</li>
              <li>10 Free Optimization</li>
              <li>24/7 support</li>
            </ul>
            <a href="#pricing" className="pricing-card__btn">
              Get started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
