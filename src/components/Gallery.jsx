import { useCallback, useEffect, useState } from "react";
import SectionHead from "./SectionHead.jsx";

// Every image dropped into src/assets/gallery/ appears here automatically, sorted by file name.
// The file name becomes the caption: "01-hereford-weanlings.jpg" -> "Hereford weanlings".
const files = import.meta.glob("../assets/gallery/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP}", {
  eager: true,
  import: "default",
});

const toCaption = (path) => {
  const name = path
    .split("/")
    .pop()
    .replace(/\.[^.]+$/, "")
    .replace(/^\d+[-_ ]*/, "")
    .replace(/[-_]+/g, " ")
    .trim();
  return name ? name.charAt(0).toUpperCase() + name.slice(1) : "Ravenhill Farms";
};

export const photos = Object.keys(files)
  .sort()
  .map((path) => ({ src: files[path], caption: toCaption(path) }));

export default function Gallery() {
  const [open, setOpen] = useState(null); // index of the photo shown in the lightbox

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (dir) => setOpen((i) => (i === null ? i : (i + dir + photos.length) % photos.length)),
    []
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, step]);

  if (photos.length === 0) return null;

  const current = open === null ? null : photos[open];

  return (
    <section className="section section-tint" id="gallery">
      <div className="container">
        <div className="section-head center">
          <SectionHead eyebrow="On the Farm" title="Gallery" center>
            <p className="lead">A look at our cattle and life on the farm.</p>
          </SectionHead>
        </div>

        <ul className="gallery-grid">
          {photos.map((photo, i) => (
            <li key={photo.src}>
              <button type="button" className="gallery-item" onClick={() => setOpen(i)}>
                <img src={photo.src} alt={photo.caption} loading="lazy" />
                <span className="gallery-caption">{photo.caption}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {current && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={current.caption} onClick={close}>
          <figure onClick={(e) => e.stopPropagation()}>
            <img src={current.src} alt={current.caption} />
            <figcaption>
              {current.caption}
              <span className="lightbox-count">
                {open + 1} / {photos.length}
              </span>
            </figcaption>
          </figure>
          <button type="button" className="lightbox-close" aria-label="Close" onClick={close}>
            &times;
          </button>
          {photos.length > 1 && (
            <>
              <button
                type="button"
                className="lightbox-nav prev"
                aria-label="Previous photo"
                onClick={(e) => {
                  e.stopPropagation();
                  step(-1);
                }}
              >
                &#8249;
              </button>
              <button
                type="button"
                className="lightbox-nav next"
                aria-label="Next photo"
                onClick={(e) => {
                  e.stopPropagation();
                  step(1);
                }}
              >
                &#8250;
              </button>
            </>
          )}
        </div>
      )}
    </section>
  );
}
