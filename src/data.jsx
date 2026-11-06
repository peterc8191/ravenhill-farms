export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#heritage", label: "Heritage" },
  { href: "#livestock", label: "Livestock" },
  { href: "#trade", label: "Import & Export" },
  { href: "#why", label: "Why Us" },
  { href: "#contact", label: "Contact", cta: true },
];

export const footerLinks = navLinks.filter((l) => l.href !== "#why");

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
  { title: "European Export", text: "Sheep and cattle export to European markets." },
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

// TODO: replace these placeholders with real contact details
export const contactDetails = [
  { label: "Location", value: "Northern Ireland" },
  { label: "Phone", value: "[Phone number]" },
  { label: "Email", value: "[Email address]" },
];
