import SectionHead from "./SectionHead.jsx";
import { reasons } from "../data.jsx";

export default function WhyUs() {
  return (
    <section className="section section-dark" id="why">
      <div className="container">
        <div className="section-head center">
          <SectionHead eyebrow="The Ravenhill Difference" title="Why Choose Ravenhill Farms" light center />
        </div>
        <ul className="why-grid">
          {reasons.map((r) => (
            <li key={r}>
              <span className="tag" aria-hidden="true"></span>
              {r}
            </li>
          ))}
        </ul>
        <p className="why-closing">
          Ravenhill Farms stands for quality, reliability, and a long tradition of excellence in
          livestock farming and trade.
        </p>
      </div>
    </section>
  );
}
