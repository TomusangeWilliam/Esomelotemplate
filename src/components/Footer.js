import React from "react";
import "../assets/footer.css";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-30">
            <div className="footer-text__title">Anapp</div>
            <div className="footer-text__body">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
              eiusmod tempor incididunt ut labore.
            </div>
          </div>
          <div className="col-30">
            <div className="footer-text__title">Quick links</div>
            <ul className="footer-list">
              <li>
                <a href="#home">About</a>
              </li>
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
              <li>
                <a href="#download">Download</a>
              </li>
            </ul>
          </div>
          <div className="col-30">
            <div className="footer-text__title">Newsletter</div>
            <div className="footer-text__body">
              Heaven fruitful doesn't over lesser in days. Appear
            </div>
            <div className="footer-input">
              <input type="text" name="email" placeholder="Email id" />
              <div className="footer-input__icon">
                <ion-icon name="paper-plane-outline" />
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          Inspired by Colorlib, coded by pathetic geek.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
