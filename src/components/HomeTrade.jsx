import SectionHead from "./SectionHead.jsx";
import { homeTrade } from "../data.jsx";

export default function HomeTrade() {
  return (
    <section className="section" id="home-trade">
      <div className="container">
        <div className="section-head center">
          <SectionHead eyebrow="Northern Ireland · Ireland" title="Home Trade" center>
            <p className="lead">
              Alongside our export work, we supply quality calves, weanlings and cattle to farmers and buyers closer to home.
              Whether you&rsquo;re building up a herd or need stock for finishing, we&rsquo;ll source the
              right animals and handle everything from selection to delivery.
            </p>
          </SectionHead>
        </div>

        <div className="services-grid">
          {homeTrade.map(({ title, text }, i) => (
            <article className="service-card" key={title}>
              <span className="service-num">{String(i + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
