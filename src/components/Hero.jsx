const logo = `${import.meta.env.BASE_URL}images/logo.jpg`;

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">Fifth-Generation Family Farm &middot; Northern Ireland</p>
          <h1>
            Suppliers of <span>Quality Livestock</span>
          </h1>
          <p className="hero-lead">
            Premium cattle, raised with care on clean pastureland &mdash; and trusted import
            and export services connecting the UK, Ireland and Europe.
          </p>
          <div className="hero-actions">
            <a href="#trade" className="btn btn-primary">Our Services</a>
            <a href="#contact" className="btn btn-outline">Get in Touch</a>
          </div>
        </div>
        <div className="hero-logo">
          <img src={logo} alt="Ravenhill Farms logo – Suppliers of Quality Livestock" />
        </div>
      </div>
      <svg className="hero-hills" viewBox="0 0 1440 160" preserveAspectRatio="none" aria-hidden="true">
        <path
          d="M0,96 C240,40 420,140 720,90 C1000,44 1200,120 1440,70 L1440,160 L0,160 Z"
          fill="#6f8a4c"
          opacity="0.35"
        />
        <path
          d="M0,120 C300,80 520,150 820,112 C1100,78 1280,140 1440,108 L1440,160 L0,160 Z"
          fill="#faf6ee"
        />
      </svg>
    </section>
  );
}
