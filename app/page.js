"use client";

import { useState } from "react";
import "./globals.css";

const featuredCars = [
  { src: "/images/m5.jpeg", label: "BMW M5", type: "Performance Detail" },
  { src: "/images/gle63.jpeg", label: "Mercedes-AMG GLE 63", type: "Exterior Detail" },
  { src: "/images/range-rover.jpeg", label: "Range Rover", type: "Maintenance Detail" },
  { src: "/images/cls550.jpeg", label: "Mercedes-Benz CLS 550", type: "Premium Detail" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Veil Auto Care home">
          <img src="/images/logo.jpeg" alt="Veil Auto Care" />
        </a>

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
        <img className="hero-image" src="/images/hero-x5m.jpeg" alt="Detailed white BMW X5 M" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">Surrey, British Columbia</p>
          <h1>Premium mobile detailing, brought to you.</h1>
          <p className="hero-copy">
            Professional interior and exterior care for vehicles that deserve more than a basic wash.
          </p>
          <div className="hero-actions">
            <a className="button button-light" href="#services">View Services</a>
            <a className="button button-ghost" href="sms:7789399958">Message to Book</a>
          </div>
        </div>
        <a className="scroll-cue" href="#services" aria-label="Scroll to services">
          <span>Explore</span>
          <i />
        </a>
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
            <p className="eyebrow">Selected Work</p>
            <h2>Finished with intention.</h2>
          </div>
          <p>A look at some of the vehicles trusted to Veil Auto Care.</p>
        </div>

        <div className="work-grid">
          {featuredCars.map((car) => (
            <article className="work-card" key={car.label}>
              <img src={car.src} alt={car.label} />
              <div className="work-info">
                <p>{car.type}</p>
                <h3>{car.label}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section statement">
        <p className="eyebrow">Mobile Service</p>
        <h2>Premium care without leaving your driveway.</h2>
        <p>
          Serving Surrey with convenient mobile detailing, seven days a week from 9 AM to 9 PM.
        </p>
      </section>

      <footer id="contact" className="footer">
        <div>
          <img src="/images/logo.jpeg" alt="Veil Auto Care" />
          <p>Premium mobile auto detailing in Surrey.</p>
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
