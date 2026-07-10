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
    src: "/images/gle63s.jpeg",
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

      <section id="services" className="section services-preview">
        <div className="section-heading">
          <p className="eyebrow">Our Services</p>
          <h2>Care built around your vehicle.</h2>
          <p>
            From maintenance details to long-term paint protection, every service is delivered with
            a clean, careful approach.
          </p>
        </div>

        <div className="service-grid">
          <article className="service-card">
            <span>01</span>
            <h3>Detailing</h3>
            <p>Interior, exterior, basic, and premium packages starting at $60.</p>
            <a href="#contact">Explore packages</a>
          </article>
          <article className="service-card">
            <span>02</span>
            <h3>Paint Correction</h3>
            <p>Restore clarity and gloss by reducing swirls and light defects.</p>
            <strong>Starting at $399</strong>
          </article>
          <article className="service-card">
            <span>03</span>
            <h3>Ceramic Coating</h3>
            <p>Long-lasting gloss, protection, and easier maintenance.</p>
            <strong>Starting at $699</strong>
          </article>
        </div>
      </section>

      <section id="work" className="section work-section">
  <div className="section-heading horizontal">
    <div>
      <p className="eyebrow">Our Work</p>
      <h2>A selection of vehicles detailed by Veil Auto Care.</h2>
    </div>
 </div>

  <div className="work-grid">
    {featuredCars.map((car) => (
      <article className="work-card" key={car.label}>
        <img src={car.src} alt={car.label} />

        <div className="work-overlay" />

        <div className="work-info">
          <p>{car.type}</p>
          <h3>{car.label}</h3>
        </div>
      </article>
    ))}
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
