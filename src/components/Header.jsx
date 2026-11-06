import { useEffect, useState } from "react";
import { navLinks } from "../data.jsx";
import useActiveSection from "../hooks/useActiveSection.js";

const logo = `${import.meta.env.BASE_URL}images/logo.jpg`;

const sectionIds = navLinks.map((l) => l.href.slice(1));

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`} id="top">
      <div className="container header-inner">
        <a href="#top" className="brand" aria-label="Ravenhill Farms home">
          <img src={logo} alt="" className="brand-logo" />
          <span className="brand-text">
            <span className="brand-name">Ravenhill</span>
            <span className="brand-sub">Farms</span>
          </span>
        </a>
        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={`site-nav${open ? " open" : ""}`} id="site-nav">
          {navLinks.map(({ href, label, cta }) => {
            const classes = [cta && "nav-cta", active === href.slice(1) && "active"]
              .filter(Boolean)
              .join(" ");
            return (
              <a key={href} href={href} className={classes || undefined} onClick={() => setOpen(false)}>
                {label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
