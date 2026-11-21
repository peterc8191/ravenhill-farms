import SectionHead from "./SectionHead.jsx";
import { phones } from "../data.jsx";

const regions = [
  {
    name: "United Kingdom",
    text: "Serving farmers and buyers across Northern Ireland, Great Britain and the wider UK market.",
    phone: phones.uk,
  },
  {
    name: "Ireland",
    text: "Serving farmers and buyers throughout Ireland, and supporting our export trade into Europe.",
    phone: phones.ie,
  },
];

export default function Farms() {
  return (
    <section className="section" id="farms">
      <div className="container">
        <div className="section-head center">
          <SectionHead eyebrow="UK · Ireland" title="Our Farms" center>
            <p className="lead">
              Ravenhill Farms operates on both sides of the border, with farms in the UK and Ireland.
              Our cattle are reared on good grassland with the care and attention to welfare our
              family has practised for five generations, and operating in both countries lets us
              move stock smoothly between the UK and Irish markets.
            </p>
          </SectionHead>
        </div>

        <div className="farm-cards">
          {regions.map(({ name, text, phone }) => (
            <div className="feature-panel farm-card" key={name}>
              <h3>{name}</h3>
              <p className="farm-text">{text}</p>
              <ul className="farm-details">
                <li>
                  <span className="farm-label">Call ({phone.label})</span>
                  <a href={phone.href}>{phone.display}</a>
                </li>
              </ul>
              <a href={phone.href} className="btn btn-primary">
                Call {phone.display}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
