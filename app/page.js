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
const packageDetails = {
  "full-level-1": {
    level: "Level 1",
    title: "Full Detail",
    price: "$100–120",
    description: "Essential care for regularly maintained vehicles.",
    interior: [
      "Interior vacuum",
      "Dashboard and console cleaned",
      "Door panels cleaned",
      "Interior windows cleaned",
      "Floor mats cleaned",
    ],
    exterior: [
      "Exterior hand wash",
      "Wheels and tires cleaned",
      "Tire dressing applied",
      "Exterior windows cleaned",
    ],
  },

  "full-level-2": {
    level: "Level 2",
    title: "Full Detail",
    price: "$130–160",
    description:
      "Deeper interior cleaning paired with a more refined exterior detail.",
    interior: [
      "Everything included in Level 1",
      "Steam cleaning",
      "Carpet and floor mat shampoo",
      "Leather and vinyl conditioning",
      "Air vents and crevices detailed",
    ],
    exterior: [
      "Everything included in Level 1",
      "Clay bar treatment",
      "Wheel barrels deep cleaned",
      "Ceramic sealant applied",
    ],
  },

  "full-level-3": {
    level: "Level 3",
    title: "Full Detail",
    price: "$160–200",
    description:
      "Our most complete interior and exterior restoration package.",
    interior: [
      "Everything included in Level 2",
      "Heavy stain treatment",
      "Deep fabric extraction",
      "Premium interior restoration",
    ],
    exterior: [
      "Everything included in Level 2",
      "Paint decontamination",
      "Engine bay detail",
      "Premium ceramic sealant",
    ],
  },

  "interior-level-1": {
    level: "Level 1",
    title: "Interior Detail",
    price: "$60–80",
    description: "Essential interior refresh.",
    interior: [
      "Interior vacuum",
      "Dashboard and console cleaned",
      "Door panels cleaned",
      "Interior windows cleaned",
      "Floor mats cleaned",
      "Light dust removal",
    ],
  },

  "interior-level-2": {
    level: "Level 2",
    title: "Interior Detail",
    price: "$90–120",
    description: "Deep interior refresh.",
    interior: [
      "Everything included in Level 1",
      "Steam cleaning",
      "Carpet and floor mat shampoo",
      "Leather and vinyl conditioning",
      "Cup holders and compartments cleaned",
      "Air vents detailed",
      "Light stain removal",
    ],
  },

  "interior-level-3": {
    level: "Level 3",
    title: "Interior Detail",
    price: "$130–170",
    description: "Complete interior rejuvenation.",
    interior: [
      "Everything included in Level 2",
      "Heavy stain treatment",
      "Pet hair removal where required",
      "Deep fabric extraction",
      "Headliner spot cleaning",
      "Complete interior restoration",
    ],
  },

  "exterior-level-1": {
    level: "Level 1",
    title: "Exterior Detail",
    price: "$50–60",
    description: "Essential exterior maintenance.",
    exterior: [
      "Pre-rinse",
      "Foam hand wash",
      "Wheels and tires cleaned",
      "Tire dressing applied",
      "Exterior windows cleaned",
      "Door jambs wiped",
      "Light bug removal",
    ],
  },

  "exterior-level-2": {
    level: "Level 2",
    title: "Exterior Detail",
    price: "$70–100",
    description: "Deeper exterior cleaning with added protection.",
    exterior: [
      "Everything included in Level 1",
      "Iron decontamination",
      "Clay bar treatment",
      "Wheel barrels deep cleaned",
      "Plastic trim restored",
      "Ceramic sealant applied",
      "Water spot removal where possible",
    ],
  },

  "exterior-level-3": {
    level: "Level 3",
    title: "Exterior Detail",
    price: "$100–150",
    description: "Complete exterior restoration and protection.",
    exterior: [
      "Everything included in Level 2",
      "Engine bay detail",
      "Premium ceramic sealant",
      "Exhaust tips polished",
      "Paint decontamination",
      "Exterior trim restoration",
      "Fine-detail finishing touches",
    ],
  },

  "ceramic-exterior": {
    level: "Ceramic Coating",
    title: "Exterior Ceramic Coating",
    price: "Starting at $699",
    description:
      "Long-lasting paint protection with enhanced gloss and hydrophobic performance.",
    exterior: [
      "Complete exterior detail",
      "Iron decontamination",
      "Clay bar treatment",
      "One-step paint enhancement polish",
      "Professional ceramic coating applied",
    ],
  },

  "ceramic-interior": {
    level: "Ceramic Coating",
    title: "Interior Ceramic Coating",
    price: "$200–300",
    description:
      "Protect leather, plastics, vinyl, and fabric from everyday wear.",
    interior: [
      "Complete Level 2 Interior Detail",
      "Leather protection",
      "Plastic and vinyl protection",
      "Fabric protection",
      "UV protection",
      "Easier future maintenance",
    ],
  },

  "addon-pethair": {
    level: "Add-On",
    title: "Pet Hair Removal",
    price: "Custom Quote",
    description: "Condition-based pet hair removal.",
    interior: [
      "Seat hair removal",
      "Carpet extraction",
      "Compressed air",
      "Condition-based pricing",
    ],
  },

  "addon-sap": {
    level: "Add-On",
    title: "Tree Sap Removal",
    price: "Custom Quote",
    description: "Paint-safe tree sap removal.",
    exterior: [
      "Paint-safe removal",
      "Exterior treatment",
      "Condition-based pricing",
    ],
  },

  "addon-headlights": {
    level: "Add-On",
    title: "Headlight Restoration",
    price: "Custom Quote",
    description: "Restore clarity and improve appearance.",
    exterior: [
      "Wet sanding",
      "Machine polishing",
      "UV protection",
    ],
  },

  "addon-decon": {
    level: "Add-On",
    title: "Paint Decontamination",
    price: "Custom Quote",
    description: "Remove bonded contamination from the paint.",
    exterior: [
      "Iron remover",
      "Clay bar treatment",
      "Paint preparation",
    ],
  },

  "addon-enhancement": {
    level: "Add-On",
    title: "Paint Enhancement",
    price: "Custom Quote",
    description: "Improve gloss and reduce light imperfections.",
    exterior: [
      "Machine polish",
      "Gloss enhancement",
      "Light swirl reduction",
      "Ceramic sealant option",
    ],
  },
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState("full");
const [selectedPackage, setSelectedPackage] = useState(null);
  const selectedDetails = selectedPackage
  ? packageDetails[selectedPackage]
  : null;

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
  <>
    <article className="package-card">
      <p className="package-level">Level 1 Interior Detail</p>
      <h3>Starting at $60</h3>
      <p className="package-description">Essential interior refresh.</p>

      <ul>
        <li>Interior vacuum</li>
        <li>Dashboard and console cleaned</li>
        <li>Door panels cleaned</li>
        <li>Interior windows cleaned</li>
        <li>Floor mats cleaned</li>
        <li>Light dust removal</li>
      </ul>

      <button
        className="package-button"
        onClick={() => setSelectedPackage("interior-level-1")}
      >
        Select Package
      </button>
    </article>

    <article className="package-card featured">
      <span className="package-badge">Best Value</span>
      <p className="package-level">Level 2 Interior Detail</p>
      <h3>Starting at $90</h3>
      <p className="package-description">Deep interior refresh.</p>

      <ul>
        <li>Everything in Level 1</li>
        <li>Steam cleaning</li>
        <li>Carpet and floor mat shampoo</li>
        <li>Leather and vinyl conditioning</li>
        <li>Cup holders and compartments cleaned</li>
        <li>Air vents detailed</li>
        <li>Light stain removal</li>
      </ul>

      <button
        className="package-button"
        onClick={() => setSelectedPackage("interior-level-2")}
      >
        Select Package
      </button>
    </article>

    <article className="package-card">
      <p className="package-level">Level 3 Interior Detail</p>
      <h3>Starting at $130</h3>
      <p className="package-description">Complete interior rejuvenation.</p>

      <ul>
        <li>Everything in Level 2</li>
        <li>Heavy stain treatment</li>
        <li>Pet hair removal where required</li>
        <li>Deep fabric extraction</li>
        <li>Headliner spot cleaning</li>
        <li>Complete interior restoration</li>
      </ul>

      <button
        className="package-button"
        onClick={() => setSelectedPackage("interior-level-3")}
      >
        Select Package
      </button>
    </article>
  </>
)}

   {activeService === "exterior" && (
  <>
    <article className="package-card">
      <p className="package-level">Level 1 Exterior Detail</p>
      <h3>Starting at $50</h3>
      <p className="package-description">Essential exterior care.</p>

      <ul>
        <li>Pre-rinse</li>
        <li>Foam hand wash</li>
        <li>Wheels and tires cleaned</li>
        <li>Tire dressing applied</li>
        <li>Exterior windows cleaned</li>
        <li>Light bug removal</li>
      </ul>

      <button
        className="package-button"
        onClick={() => setSelectedPackage("exterior-level-1")}
      >
        Select Package
      </button>
    </article>

    <article className="package-card featured">
      <span className="package-badge">Best Value</span>
      <p className="package-level">Level 2 Exterior Detail</p>
      <h3>Starting at $70</h3>
      <p className="package-description">
        Deeper exterior cleaning with added protection.
      </p>

      <ul>
        <li>Everything in Level 1</li> 
        <li>Wheel barrels deep cleaned</li>
        <li>Plastic trim restored</li>
        <li>Water spot removal where possible</li>
        <li>Door jambs wiped</li>
        <li>Heavy Bug Removal</li>
      </ul>

      <button
        className="package-button"
        onClick={() => setSelectedPackage("exterior-level-2")}
      >
        Select Package
      </button>
    </article>

    <article className="package-card">
      <p className="package-level">Level 3 Exterior Detail</p>
      <h3>Starting at $100</h3>
      <p className="package-description">
        Complete exterior restoration and protection.
      </p>

      <ul>
        <li>Everything in Level 2</li>
        <li>Iron decontamination</li>
        <li>Clay bar treatment</li>
        <li>Engine bay detail</li>
         <li>Ceramic sealant applied</li>
         <li>Exterior trim restoration</li>
        <li>Fine-detail finishing touches</li>
      </ul>

      <button
        className="package-button"
        onClick={() => setSelectedPackage("exterior-level-3")}
      >
        Select Package
      </button>
    </article>
  </>
)}
    {activeService === "ceramic" && (
      <p className="service-placeholder">
        Ceramic coating packages are being added next.
      </p>
    )}

   {activeService === "addons" && (
  <>
    <article className="package-card">
      <p className="package-level">Pet Hair Removal</p>
      <h3>Custom Quote</h3>

      <ul>
     
        <li>Seat hair removal</li>
        <li>Carpet extraction</li>
        <li>Compressed air</li>
        <li>Condition based pricing</li>
      </ul>

      <button
        className="package-button"
        onClick={() => setSelectedPackage("addon-pethair")}
      >
        Select Package
      </button>
    </article>

    <article className="package-card">
      <p className="package-level">Tree Sap Removal</p>
      <h3>Custom Quote</h3>

      <ul>
        <li>Paint-safe removal</li>
        <li>Exterior treatment</li>
        <li>Condition based pricing</li>
      </ul>

      <button
        className="package-button"
        onClick={() => setSelectedPackage("addon-sap")}
      >
        Select Package
      </button>
    </article>

    <article className="package-card">
      <p className="package-level">Headlight Restoration</p>
      <h3>Custom Quote</h3>

      <ul>
        <li>Wet sanding</li>
        <li>Machine polishing</li>
        <li>UV protection</li>
      </ul>

      <button
        className="package-button"
        onClick={() => setSelectedPackage("addon-headlights")}
      >
        Select Package
      </button>
    </article>

    <article className="package-card">
      <p className="package-level">Paint Decontamination</p>
      <h3>Custom Quote</h3>

      <ul>
        <li>Iron remover</li>
        <li>Clay bar treatment</li>
        <li>Paint preparation</li>
      </ul>

      <button
        className="package-button"
        onClick={() => setSelectedPackage("addon-decon")}
      >
        Select Package
      </button>
    </article>

    <article className="package-card">
      <p className="package-level">Paint Enhancement</p>
      <h3>Custom Quote</h3>

      <ul>
        <li>Machine polish</li>
        <li>Gloss enhancement</li>
        <li>Light swirl reduction</li>
        <li>Ceramic sealant option</li>
      </ul>

      <button
        className="package-button"
        onClick={() => setSelectedPackage("addon-enhancement")}
      >
        Select Package
      </button>
    </article>
  </>
)}
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
          <h3>{car.label}</h3>

          <div className="work-services">
            {car.services.map((service) => (
              <span key={service}>{service}</span>
            ))}
          </div>
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
      {selectedDetails && (
  <div
    className="package-modal-backdrop"
    onClick={() => setSelectedPackage(null)}
  >
    <div
      className="package-modal"
      onClick={(event) => event.stopPropagation()}
    >
      <button
        className="package-modal-close"
        onClick={() => setSelectedPackage(null)}
        aria-label="Close package details"
      >
        ×
      </button>

      <p className="package-modal-level">{selectedDetails.level}</p>
      <h2>{selectedDetails.title}</h2>

      <div className="package-modal-summary">
        <div>
          <span>Package</span>
          <strong>{selectedDetails.price}</strong>
        </div>

        <p>{selectedDetails.description}</p>
      </div>

      {selectedDetails.interior && (
  <div className="package-modal-group">
    <h3>Interior</h3>
    <ul>
      {selectedDetails.interior.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </div>
)}

{selectedDetails.exterior && (
  <div className="package-modal-group">
    <h3>Exterior</h3>
    <ul>
      {selectedDetails.exterior.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </div>
)}
      <p className="package-modal-note">
        We’ll confirm your vehicle size, service location, and appointment
        time before your booking is finalized.
      </p>

      <div className="package-modal-actions">
        <a href="sms:7789399958" className="package-modal-button primary">
          Message to Book
        </a>

        <a href="tel:7789399958" className="package-modal-button">
          Call to Book
        </a>
      </div>
    </div>
  </div>
)}

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
