import SectionHead from "./SectionHead.jsx";

// One of the Ravenhill farm locations: description on one side, location + phone card on the other.
export default function FarmSection({ id, eyebrow, title, location, phone, tint = false, reverse = false, children }) {
  return (
    <section className={`section${tint ? " section-tint" : ""}`} id={id}>
      <div className={`container two-col${reverse ? " reverse" : ""}`}>
        {reverse && <FarmCard location={location} phone={phone} />}
        <div>
          <SectionHead eyebrow={eyebrow} title={title} />
          <div className="prose">{children}</div>
        </div>
        {!reverse && <FarmCard location={location} phone={phone} />}
      </div>
    </section>
  );
}

function FarmCard({ location, phone }) {
  return (
    <div className="feature-panel farm-card">
      <h3>Find us</h3>
      <ul className="farm-details">
        <li>
          <span className="farm-label">Location</span>
          <span>{location}</span>
        </li>
        <li>
          <span className="farm-label">Call ({phone.label})</span>
          <a href={phone.href}>{phone.display}</a>
        </li>
      </ul>
      <a href={phone.href} className="btn btn-primary">
        Call {phone.display}
      </a>
    </div>
  );
}
