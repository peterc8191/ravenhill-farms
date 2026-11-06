import { stats } from "../data.jsx";

export default function Stats() {
  return (
    <section className="stats" aria-label="At a glance">
      <div className="container stats-grid">
        {stats.map(({ value, label }) => (
          <div className="stat" key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
