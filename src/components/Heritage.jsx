import SectionHead from "./SectionHead.jsx";
import { values } from "../data.jsx";

export default function Heritage() {
  return (
    <section className="section section-heritage" id="heritage">
      <div className="container">
        <div className="section-head center">
          <SectionHead eyebrow="Since Five Generations Ago" title="Our Heritage" light center>
            <p className="lead">
              Ravenhill Farms began as a small family holding five generations ago, built on hard work,
              good stock, and a commitment to honest farming. Over the decades, the farm has grown into
              a respected name in livestock production and international trade.
            </p>
          </SectionHead>
        </div>

        <p className="values-intro">What has never changed is our dedication to:</p>
        <div className="values-grid">
          {values.map(({ title, icon }) => (
            <div className="value-card" key={title}>
              <div className="value-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">{icon}</svg>
              </div>
              <h3>{title}</h3>
            </div>
          ))}
        </div>

        <blockquote className="heritage-quote">
          Our heritage is not just our history &mdash; it&rsquo;s the foundation of how we operate today.
        </blockquote>
      </div>
    </section>
  );
}
