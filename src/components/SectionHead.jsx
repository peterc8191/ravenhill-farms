// Eyebrow + heading + divider used at the top of most sections.
export default function SectionHead({ eyebrow, title, light = false, center = false, children }) {
  return (
    <>
      <p className={`eyebrow${light ? " light" : ""}`}>{eyebrow}</p>
      <h2>{title}</h2>
      <div className={`divider${center ? " center" : ""}`} aria-hidden="true"></div>
      {children}
    </>
  );
}
