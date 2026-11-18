export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#heritage", label: "Heritage" },
  { href: "#livestock", label: "Livestock" },
  { href: "#home-trade", label: "Home Trade" },
  { href: "#trade", label: "Import & Export" },
  { href: "#keady", label: "Our Farms" },
  { href: "#contact", label: "Contact", cta: true },
];

export const footerLinks = navLinks;

export const facebookUrl = "https://www.facebook.com/ravenhilllivestock";

export const phones = {
  uk: { label: "UK", display: "07849 365687", href: "tel:+447849365687" },
  ie: { label: "Ireland", display: "087 964 4831", href: "tel:+353879644831" },
};

export const stats = [
  { value: "5", label: "Generations of farming" },
  { value: "100+", label: "Years working the land" },
  { value: "UK & IE", label: "Seamless access to both markets" },
  { value: "EU", label: "Strong European export capability" },
];

export const values = [
  {
    title: "Responsible farming practices",
    icon: (
      <>
        <path d="M12 22c4-3 7-7 7-12a7 7 0 0 0-14 0c0 5 3 9 7 12z" />
        <path d="M12 22V9" />
        <path d="M12 13l-3-3M12 11l3-3" />
      </>
    ),
  },
  {
    title: "High\u2011quality breeding and animal care",
    icon: <path d="M12 2l2.9 6.3 6.9.7-5.2 4.6 1.5 6.8L12 17l-6.1 3.4 1.5-6.8L2.2 9l6.9-.7z" />,
  },
  {
    title: "Strong relationships with farmers, suppliers, and buyers",
    icon: (
      <>
        <path d="M8 12l3 3 5-5" />
        <path d="M2 12l4-4 4 2 4-2 4 2 4 2-6 6-4-1-4 1z" />
      </>
    ),
  },
  {
    title: "A family\u2011run approach that values trust and consistency",
    icon: (
      <>
        <path d="M3 11l9-7 9 7" />
        <path d="M5 10v10h14V10" />
        <path d="M10 20v-6h4v6" />
      </>
    ),
  },
];

export const livestockQualities = [
  "Strong genetics",
  "Excellent condition",
  "High welfare standards",
  "Compliance with UK, Irish, and EU regulations",
];

export const services = [
  { title: "European Export", text: "Cattle export to European markets." },
  { title: "Import Services", text: "Import services for UK and Irish buyers." },
  { title: "Full Compliance", text: "Fully compliant transport and health certification." },
  { title: "Logistics", text: "Reliable logistics and professional coordination." },
];

export const reasons = [
  "Five generations of farming expertise",
  "Trusted import/export specialists",
  "Prime location between the UK and Ireland",
  "Strong European export capability",
  "High welfare and traceability standards",
  "Family\u2011run service with professional delivery",
];

export const enquiryTypes = [
  "Livestock sales",
  "Export to Europe",
  "Import to UK / Ireland",
  "General enquiry",
];

export const homeTrade = [
  { title: "Local Supply", text: "Quality cattle supplied to farmers across Northern Ireland and Ireland." },
  { title: "Sourced to Order", text: "Stock selected to suit each buyer's requirements." },
  { title: "Fully Traceable", text: "Complete health and movement paperwork with every animal." },
  { title: "Delivered with Care", text: "Transport arranged to your farm, handled with high welfare standards." },
];

export const contactDetails = [
  { label: "Farms", value: "Keady, Co. Armagh · Castleblayney, Co. Monaghan" },
  { label: "Phone (UK)", value: phones.uk.display, href: phones.uk.href },
  { label: "Phone (IE)", value: phones.ie.display, href: phones.ie.href },
  { label: "Email", value: "conorohara18@gmail.com", href: "mailto:conorohara18@gmail.com" },
];
