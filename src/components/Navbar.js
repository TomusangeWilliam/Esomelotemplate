import React, { useState } from "react";
import { useScrollYPosition } from "react-use-scroll-position";
import "../assets/navbar.css";

function Navbar({ links }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollY = useScrollYPosition();

  const stickeyTrigger = window.innerHeight / 2.75;

  return (
    <div
      className={`nav${scrollY > stickeyTrigger ? " nav-stickey" : ""}${
        menuOpen ? " nav-open" : ""
      }`}>
      <div className="nav-content">
       
      <a href="https://www.esomelo.com/" >
          <img src="./images/esomelologo.png" id="logoimg"  alt="download" />
       </a>
          
          
        <div onclick="window.open('newurl.html','mywindow');" className="nav-logo" >ESOMELO</div>
        


        <nav className="nav-links__container">
          {links &&
            links.map((link, i) => (
              <a className="nav-link" href={link.href} key={i}>
                
                <div className="nav-link__text">{link.title}</div>
                <div className="nav-link__background" />
              </a>
            ))}
        </nav>

        <div className="nav-menu__icon" onClick={() => setMenuOpen(!menuOpen)}>
        <div>
          </div>
          <div />
          <div />
        </div>
      </div>
    </div>
  );
}

Navbar.defaultProps = {
  links: [
    { title: "Home", href: "#home" },
    { title: "Features", href: "#features" },
    { title: "Services", href: "#services" },
    { title: "Pricing", href: "#pricing" },
    { title: "Blog", href: "#blog" },
    { title: "Customers", href: "#Customers" },
    { title: "Login", href: "#Login" }
  ]
};

export default Navbar;
