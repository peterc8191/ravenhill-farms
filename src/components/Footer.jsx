import { facebookUrl, footerLinks } from "../data.jsx";
import { FacebookIcon } from "./Facebook.jsx";

const logo = `${import.meta.env.BASE_URL}images/logo.jpg`;

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <img src={logo} alt="Ravenhill Farms logo" />
          <p>Suppliers of Quality Livestock</p>
        </div>
        <nav className="footer-nav" aria-label="Footer">
          {footerLinks.map(({ href, label }) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
          <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="footer-social">
            <FacebookIcon className="footer-social-icon" />
            Facebook
          </a>
        </nav>
        <p className="copyright">&copy; {new Date().getFullYear()} Ravenhill Farms. All rights reserved.</p>
      </div>
    </footer>
  );
}
