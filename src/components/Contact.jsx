import { useState } from "react";
import SectionHead from "./SectionHead.jsx";
import { contactDetails, enquiryTypes } from "../data.jsx";

export default function Contact() {
  const [status, setStatus] = useState("");

  // TODO: send the form to a real handler (e.g. Formspree, Netlify Forms, or your own backend).
  // Nothing is sent yet, so don't tell visitors their enquiry was received.
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Online enquiries are coming soon. Please contact us by phone or email for now.");
  };

  return (
    <section className="section" id="contact">
      <div className="container two-col">
        <div>
          <SectionHead eyebrow="Get in Touch" title="Talk to Ravenhill Farms" />
          <p className="prose">
            Whether you&rsquo;re buying, selling, or moving livestock across borders, we&rsquo;d be glad
            to hear from you.
          </p>
          <ul className="contact-list">
            {contactDetails.map(({ label, value }) => (
              <li key={label}>
                <strong>{label}</strong>
                <span>{value}</span>
              </li>
            ))}
          </ul>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" autoComplete="name" required />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" autoComplete="email" required />
          </div>
          <div className="field">
            <label htmlFor="enquiry">Enquiry type</label>
            <select id="enquiry" name="enquiry">
              {enquiryTypes.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={5} required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send Enquiry</button>
          {status && (
            <p className="form-status" role="status">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
