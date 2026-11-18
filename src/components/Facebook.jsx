import { useEffect, useRef, useState } from "react";
import { facebookUrl } from "../data.jsx";

export function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.62 23.1 24 18.1 24 12.07z" />
    </svg>
  );
}

const EMBED_HEIGHT = 600;

// Facebook's Page Plugin only accepts widths from 180px to 500px and doesn't resize itself,
// so measure the container and rebuild the iframe URL when the width changes.
function FacebookPageEmbed() {
  const boxRef = useRef(null);
  const [width, setWidth] = useState(500);

  useEffect(() => {
    const box = boxRef.current;
    if (!box) return;
    const measure = () => {
      const w = Math.round(Math.min(500, Math.max(180, box.clientWidth)));
      setWidth((prev) => (Math.abs(prev - w) > 10 ? w : prev));
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(box);
    return () => observer.disconnect();
  }, []);

  const params = new URLSearchParams({
    href: facebookUrl,
    tabs: "timeline",
    width: String(width),
    height: String(EMBED_HEIGHT),
    small_header: "false",
    adapt_container_width: "true",
    hide_cover: "false",
    show_facepile: "true",
  });

  return (
    <div className="fb-embed" ref={boxRef}>
      <iframe
        key={width}
        title="Ravenhill Livestock on Facebook"
        src={`https://www.facebook.com/plugins/page.php?${params}`}
        width={width}
        height={EMBED_HEIGHT}
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        allow="encrypted-media; clipboard-write; web-share"
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default function Facebook() {
  return (
    <section className="section section-social" id="facebook">
      <div className="container two-col social-inner">
        <div className="social-copy">
          <FacebookIcon className="social-icon" />
          <p className="eyebrow light">Stay Connected</p>
          <h2>Follow Us on Facebook</h2>
          <div className="divider" aria-hidden="true"></div>
          <p className="lead">
            See our latest cattle, farm news and upcoming shipments on our Facebook page.
          </p>
          <a href={facebookUrl} className="btn btn-facebook" target="_blank" rel="noopener noreferrer">
            <FacebookIcon className="btn-icon" />
            Visit Ravenhill Livestock on Facebook
          </a>
        </div>
        <FacebookPageEmbed />
      </div>
    </section>
  );
}
