import SectionHead from "./SectionHead.jsx";
import { services } from "../data.jsx";

export default function Trade() {
  return (
    <section className="section section-tint" id="trade">
      <div className="container">
        <div className="section-head center">
          <SectionHead eyebrow="UK · Ireland · Europe" title="Import & Export Services" center>
            <p className="lead">
              Ravenhill Farms provides a complete livestock import and export service, handling
              everything from sourcing and selection to transport and documentation. Our strategic
              location allows us to move livestock efficiently between the UK, Ireland, and mainland
              Europe.
            </p>
          </SectionHead>
        </div>

        <div className="services-grid">
          {services.map(({ title, text }, i) => (
            <article className="service-card" key={title}>
              <span className="service-num">{String(i + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>

        <p className="center-note">
          Our experience ensures smooth, timely, and safe movement of livestock across borders.
        </p>
      </div>
    </section>
  );
}
