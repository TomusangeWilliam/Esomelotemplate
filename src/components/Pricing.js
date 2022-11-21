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
              <li>Report generation</li>
              <li>Staff  management</li>
              <li>Student management</li>
              <li>Class and Timetable management</li>
              <li>GPS Bus/van tracking</li>
              <li>medical Reports </li>
              <li>staff payroll management & Reports</li>
              <li>Attendance management & Reports</li>
              <li>School Fee management & Reports</li>
              <li>Library management & Reports</li>
              <li>Free Website </li>
            </ul>
            <a href="#pricing" className="pricing-card__btn">
              Get started
            </a>
          </div>

          <div className="pricing-card">
            <div className="pricing-card__header">
              <span className="pricing-card__subtitle">1 years</span>
              <div className="pricing-card__title">
                UGx 1.2 million<span> / year</span>
              </div>
            </div>
            <ul className="pricing-card__features">
            <li>Report generation</li>
              <li>Staff  management</li>
              <li>Student management</li>
              <li>Class and Timetable management</li>
              <li>GPS Bus/van tracking</li>
              <li>medical Reports </li>
              <li>staff payroll management & Reports</li>
              <li>Attendance management & Reports</li>
              <li>School Fee management & Reports</li>
              <li>Library management & Reports</li>
              <li>Free Website </li>
              <li>Live classes </li>
              <li>Customize mobile app</li>
            </ul>
            <a href="#pricing" className="pricing-card__btn">
              Get started
            </a>
          </div>

          <div className="pricing-card">
            <div className="pricing-card__header">
              <span className="pricing-card__subtitle">Every Academic Term</span>
              <div className="pricing-card__title">
                Ugx 120,000<span> /each term</span>
              </div>
            </div>
            <ul className="pricing-card__features">
            <li>Report generation</li>
              <li>Staff  management</li>
              <li>Student management</li>
              <li>Class and Timetable management</li>
              <li>GPS Bus/van tracking</li>
              <li>medical Reports </li>
              <li>staff payroll management & Reports</li>
              <li>Attendance management & Reports</li>
              <li>School Fee management & Reports</li>
              <li>Library management & Reports</li>
              <li>Free Website </li>
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
