import { useCallback, useEffect, useRef, useState } from "react";
import SectionHead from "./SectionHead.jsx";

// Every image dropped into src/assets/gallery/ appears here automatically, sorted by file name.
// The build makes resized WebP copies (large for the slideshow, small for the previews),
// so full-size phone photos are fine to drop in. The originals are never served.
const large = import.meta.glob("../assets/gallery/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP}", {
  eager: true,
  import: "default",
  query: { w: "1280", format: "webp", quality: "65", withoutEnlargement: "" },
});
const small = import.meta.glob("../assets/gallery/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP}", {
  eager: true,
  import: "default",
  query: { w: "260", format: "webp", quality: "70", withoutEnlargement: "" },
});

// The file name becomes the caption: "01-hereford-weanlings.jpg" -> "Hereford weanlings".
// Automatic names from phones and WhatsApp ("WhatsApp Image 2026-...", "IMG_1234", "image") get no caption.
const AUTO_NAME = /^(whatsapp image|img|image|photo|pxl|dsc|dcim)\b|^[\d\s_()-]+$/i;
const toCaption = (path) => {
  const name = decodeURIComponent(path.split("/").pop().split("?")[0])
    .replace(/\.[^.]+$/, "")
    .replace(/^\d+[-_ ]*/, "")
    .replace(/\s*\(\d+\)$/, "")
    .replace(/[-_]+/g, " ")
    .trim();
  if (!name || AUTO_NAME.test(name)) return "";
  return name.charAt(0).toUpperCase() + name.slice(1);
};

const keyOf = (path) => path.split("?")[0];
const smallByFile = Object.fromEntries(Object.entries(small).map(([p, url]) => [keyOf(p), url]));

export const photos = Object.keys(large)
  .sort()
  .map((path) => ({
    src: large[path],
    thumb: smallByFile[keyOf(path)] ?? large[path],
    caption: toCaption(path),
  }));

const altOf = (photo, i) => photo.caption || `Ravenhill Farms cattle, photo ${i + 1}`;

const AUTOPLAY_MS = 5000;
const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(() => !prefersReducedMotion());
  const [paused, setPaused] = useState(false); // temporarily paused while hovered/focused
  const [fullscreen, setFullscreen] = useState(false);
  const thumbsRef = useRef(null);
  const touchX = useRef(null);

  const count = photos.length;
  const go = useCallback((i) => setIndex(((i % count) + count) % count), [count]);
  const step = useCallback((dir) => setIndex((i) => (i + dir + count) % count), [count]);

  // Autoplay (restarts the timer whenever the slide changes)
  useEffect(() => {
    if (!playing || paused || fullscreen || count < 2) return;
    const t = setTimeout(() => step(1), AUTOPLAY_MS);
    return () => clearTimeout(t);
  }, [index, playing, paused, fullscreen, count, step]);

  // Keep the active thumbnail visible in the preview strip
  useEffect(() => {
    const strip = thumbsRef.current;
    const thumb = strip?.children[index];
    if (!strip || !thumb) return;
    const left = thumb.offsetLeft - strip.clientWidth / 2 + thumb.clientWidth / 2;
    strip.scrollTo({ left, behavior: prefersReducedMotion() ? "auto" : "smooth" });
  }, [index]);

  // Keyboard + scroll lock while full screen
  useEffect(() => {
    if (!fullscreen) return;
    const onKey = (e) => {
      if (e.key === "Escape") setFullscreen(false);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [fullscreen, step]);

  if (count === 0) return null;

  const current = photos[index];

  const onTouchStart = (e) => (touchX.current = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 40) step(dx < 0 ? 1 : -1);
    touchX.current = null;
  };

  const onStageKey = (e) => {
    if (e.key === "ArrowRight") step(1);
    if (e.key === "ArrowLeft") step(-1);
  };

  return (
    <section className="section section-tint" id="gallery">
      <div className="container">
        <div className="section-head center">
          <SectionHead eyebrow="On the Farm" title="Gallery" center>
            <p className="lead">A look at our cattle and life on the farm.</p>
          </SectionHead>
        </div>

        <div
          className="slideshow"
          role="region"
          aria-roledescription="carousel"
          aria-label="Farm photo gallery"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <div
            className="slide-stage"
            tabIndex={0}
            onKeyDown={onStageKey}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {photos.map((photo, i) => (
              <button
                key={photo.src}
                type="button"
                className={`slide${i === index ? " is-active" : ""}`}
                aria-hidden={i !== index}
                tabIndex={i === index ? 0 : -1}
                aria-label={`View photo ${i + 1} full screen`}
                onClick={() => setFullscreen(true)}
              >
                {/* Only load the current slide and its neighbours */}
                {Math.min(Math.abs(i - index), count - Math.abs(i - index)) <= 1 && (
                  <img src={photo.src} alt={altOf(photo, i)} />
                )}
              </button>
            ))}

            <div className="slide-caption" aria-live={playing && !paused ? "off" : "polite"}>
              <span>{current.caption}</span>
              <span className="slide-count">
                {index + 1} / {count}
              </span>
            </div>

            {count > 1 && (
              <>
                <button type="button" className="slide-nav prev" aria-label="Previous photo" onClick={() => step(-1)}>
                  &#8249;
                </button>
                <button type="button" className="slide-nav next" aria-label="Next photo" onClick={() => step(1)}>
                  &#8250;
                </button>
                <button
                  type="button"
                  className="slide-play"
                  aria-label={playing ? "Pause slideshow" : "Play slideshow"}
                  onClick={() => setPlaying((p) => !p)}
                >
                  {playing ? (
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 5h3v14H7zM14 5h3v14h-3z" /></svg>
                  ) : (
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5l11 7-11 7z" /></svg>
                  )}
                </button>
                {playing && !paused && !fullscreen && (
                  <div className="slide-progress" key={index} style={{ animationDuration: `${AUTOPLAY_MS}ms` }} />
                )}
              </>
            )}
          </div>

          {count > 1 && (
            <div className="slide-thumbs" ref={thumbsRef}>
              {photos.map((photo, i) => (
                <button
                  key={photo.src}
                  type="button"
                  className={`slide-thumb${i === index ? " is-active" : ""}`}
                  aria-label={`Show photo ${i + 1}${photo.caption ? `: ${photo.caption}` : ""}`}
                  aria-current={i === index}
                  onClick={() => go(i)}
                >
                  <img src={photo.thumb} alt="" loading="lazy" />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {fullscreen && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={altOf(current, index)}
          onClick={() => setFullscreen(false)}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <figure onClick={(e) => e.stopPropagation()}>
            <img src={current.src} alt={altOf(current, index)} />
            <figcaption>
              {current.caption}
              <span className="lightbox-count">
                {index + 1} / {count}
              </span>
            </figcaption>
          </figure>
          <button type="button" className="lightbox-close" aria-label="Close" onClick={() => setFullscreen(false)}>
            &times;
          </button>
          {count > 1 && (
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
