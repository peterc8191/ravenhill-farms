import SectionHead from "./SectionHead.jsx";
import { livestockQualities } from "../data.jsx";

export default function Livestock() {
  return (
    <section className="section" id="livestock">
      <div className="container two-col reverse">
        <div className="feature-panel">
          <h3>Our livestock is known for:</h3>
          <ul className="check-list">
            {livestockQualities.map((q) => (
              <li key={q}>{q}</li>
            ))}
          </ul>
        </div>
        <div>
          <SectionHead eyebrow="Cattle" title="Livestock Farming" />
          <div className="prose">
            <p>
              We specialise in raising healthy, well&#8209;bred cattle suited for both domestic
              and international markets. Our animals are reared on clean pastureland, managed with expert
              care, and monitored to ensure full traceability from farm to buyer.
            </p>
            <p>
              Whether supplying local farmers or preparing shipments for European buyers, we maintain the
              same level of quality and attention to detail.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
