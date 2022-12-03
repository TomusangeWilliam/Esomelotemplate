import React from "react";
import "./assets/styles.css";
import Navbar from "./components/Navbar";

import HeroBanner from "./components/HeroBanner";
import Features from "./components/Features";
import Services from "./components/Services";
import Screenshots from "./components/Screenshots";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import Download from "./components/Download";
import Customers from "./components/Customers";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroBanner />
        <Features />
        <Services />
        <Screenshots />
        <Pricing />
        <Download />
        <Customers/>
      </main>
    <Footer />
      
    </>
  );
}
