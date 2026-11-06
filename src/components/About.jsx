import SectionHead from "./SectionHead.jsx";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container two-col">
        <div>
          <SectionHead eyebrow="About Us" title="About Ravenhill Farms" />
        </div>
        <div className="prose">
          <p>
            Ravenhill Farms is a fifth&#8209;generation family farm rooted in the heart of Northern
            Ireland, specialising in premium sheep and cattle farming alongside trusted livestock import
            and export services. For over a century, our family has worked the land, raised quality
            livestock, and built a reputation for reliability, integrity, and exceptional standards in
            agricultural trade.
          </p>
          <p>
            Our farm sits in a unique position between the UK and Ireland, giving us seamless access to
            both markets and an ideal gateway for exporting livestock across Europe. Today, Ravenhill
            Farms combines traditional farming values with modern logistics and compliance, ensuring
            every animal meets the highest standards of health, welfare, and traceability.
          </p>
        </div>
      </div>
    </section>
  );
}
