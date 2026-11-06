import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Stats from "./components/Stats.jsx";
import About from "./components/About.jsx";
import Heritage from "./components/Heritage.jsx";
import Livestock from "./components/Livestock.jsx";
import Trade from "./components/Trade.jsx";
import WhyUs from "./components/WhyUs.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import useReveal from "./hooks/useReveal.js";

export default function App() {
  useReveal(
    ".section-head, .two-col > *, .value-card, .service-card, .why-grid li, .heritage-quote, .stat"
  );

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Heritage />
        <Livestock />
        <Trade />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
