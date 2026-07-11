"use client";

import { useState } from "react";
import "./globals.css";

const featuredCars = [
  {
    src: "/images/m5.jpeg",
    label: "BMW M5 Competition",
    services: [
      "Maintenance Detail",
    ],
  },
  {
    src: "/images/gle63.jpeg",
    label: "Mercedes-AMG GLE 63 S",
    services: [
      "Ceramic Maintenance",
    ],
  },
  {
    src: "/images/range-rover.jpeg",
    label: "Range Rover Autobiography",
    services: [
      "Ceramic Maintenance",
    ],
  },
  {
    src: "/images/cls550.jpeg",
    label: "Mercedes-Benz CLS550",
    services: [
      "Premium Detail",
    ],
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState("full");
const [selectedPackage, setSelectedPackage] = useState(null);

  return (
    <main>
      <header className="site-header">
        
        <nav className={menuOpen ? "nav open" : "nav"} aria-label="Main navigation">
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#work" onClick={() => setMenuOpen(false)}>Our Work</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>

        <button
          className="menu-button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>
      </header>

      <section id="home" className="hero">
        <img className="hero-image" src="/images/m5.jpeg" alt="BMW M5" />
        <div className="hero-overlay" />
        <div className="hero-content">
            <div className="hero-brand">
  <h2>VEIL AUTOCARE</h2>
  <p>Beneath the Veil. Perfection.</p>
</div>
            
          <p className="eyebrow">Surrey, British Columbia</p>
         
          <div className="hero-actions">
            <a className="button button-light" href="#services">Explore Services</a>
            <a className="button button-ghost" href="sms:7789399958">Message to Book</a>
          </div>
        </div>
      
      </section>

     <section id="services" className="section pricing-section">
  <div className="section-heading pricing-heading">
    <p className="eyebrow">Services</p>
    <h2>Choose the level of care your vehicle deserves.</h2>
    <p>
      Premium mobile detailing throughout Surrey and the Lower Mainland.
      Final pricing depends on vehicle size and condition.
    </p>
  </div>

  <div className="service-tabs">
    <button
      className={activeService === "full" ? "active" : ""}
      onClick={() => setActiveService("full")}
    >
      Full Detail
    </button>

    <button
      className={activeService === "interior" ? "active" : ""}
      onClick={() => setActiveService("interior")}
    >
      Interior
    </button>

    <button
      className={activeService === "exterior" ? "active" : ""}
      onClick={() => setActiveService("exterior")}
    >
      Exterior
    </button>

    <button
      className={activeService === "ceramic" ? "active" : ""}
      onClick={() => setActiveService("ceramic")}
    >
      Ceramic Coating
    </button>

    <button
      className={activeService === "addons" ? "active" : ""}
      onClick={() => setActiveService("addons")}
    >
      Add-Ons
    </button>
  </div>

  <div className="package-grid">
    {activeService === "full" && (
      <>
        <article className="package-card">
          <p className="package-level">Level 1 Detail</p>
          <h3>Starting at $100</h3>
          <p className="package-description">Essential care.</p>

          <ul>
            <li>Interior vacuum</li>
            <li>Dashboard and console cleaned</li>
            <li>Door panels cleaned</li>
            <li>Interior windows cleaned</li>
            <li>Exterior hand wash</li>
            <li>Wheels and tires cleaned</li>
            <li>Tire dressing</li>
          </ul>

          <button
            className="package-button"
            onClick={() => setSelectedPackage("full-level-1")}
          >
            Select Package
          </button>
        </article>

        <article className="package-card featured">
          <span className="package-badge">Best Value</span>
          <p className="package-level">Level 2 Detail</p>
          <h3>Starting at $130</h3>
          <p className="package-description">Deep refresh.</p>

          <ul>
            <li>Everything in Level 1</li>
            <li>Steam cleaning</li>
            <li>Carpet and floor mat shampoo</li>
            <li>Leather and vinyl conditioning</li>
            <li>Clay bar treatment</li>
            <li>Ceramic sealant</li>
          </ul>

          <button
            className="package-button"
            onClick={() => setSelectedPackage("full-level-2")}
          >
            Select Package
          </button>
        </article>

        <article className="package-card">
          <p className="package-level">Level 3 Detail</p>
          <h3>Starting at $160</h3>
          <p className="package-description">Complete reset.</p>

          <ul>
            <li>Everything in Level 2</li>
            <li>Paint decontamination</li>
            <li>Engine bay detail</li>
            <li>Premium interior restoration</li>
            <li>Ceramic sealant</li>
          </ul>

          <button
            className="package-button"
            onClick={() => setSelectedPackage("full-level-3")}
          >
            Select Package
          </button>
        </article>
      </>
    )}

    {activeService === "interior" && (
      <p className="service-placeholder">
        Interior packages are being added next.
      </p>
    )}

    {activeService === "exterior" && (
      <p className="service-placeholder">
        Exterior packages are being added next.
      </p>
    )}

    {activeService === "ceramic" && (
      <p className="service-placeholder">
        Ceramic coating packages are being added next.
      </p>
    )}

    {activeService === "addons" && (
      <p className="service-placeholder">
        Add-ons are being added next.
      </p>
    )}
  </div>
</section>

  <section className="section statement">
        <p className="eyebrow">Premium Detailing</p>
        <h2>Premium auto detailing, done right.</h2>
        <p>
          Professional interior, exterior, ceramic protection, and maintenance detailing. Visit us or book our mobile service.
        </p>
      </section>

      <footer id="contact" className="footer">
        <div>
          <img src="/images/logo-v2.png" alt="Veil Auto Care" />
          <p>Premium auto detailing in Surrey.</p>
        </div>
        <div className="footer-links">
          <a href="tel:7789399958">778-939-9958</a>
          <a href="sms:7789399958">Message to Book</a>
          <a href="mailto:veilautocare.1@gmail.com">veilautocare.1@gmail.com</a>
          <a href="https://instagram.com/veilautocare" target="_blank" rel="noreferrer">@veilautocare</a>
        </div>
      </footer>

      <div className="mobile-booking">
        <a href="sms:7789399958">Message to Book</a>
        <a href="tel:7789399958">Call</a>
      </div>
    </main>
  );
}
