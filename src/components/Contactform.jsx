import React from "react";
import "./Contactform.css";

const Contactform = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // 👉 add API / form logic here later
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="contact-wrap">
      <div className="contact-bg" />

      <div className="contact-inner">
        <p className="sec-tag">Reach Out</p>

        <h2 className="sec-h" style={{ color: "#fff" }}>
          Contact Us<br />
          <em>Today</em>
        </h2>

        <p className="sec-sub">
          Our friendly team is ready to answer your questions and help you schedule your visit.
        </p>

        <form className="c-form" onSubmit={handleSubmit}>
          <div className="c-row">
            <div className="c-field">
              <label>Name</label>
              <input type="text" placeholder="Your full name" />
            </div>

            <div className="c-field">
              <label>Email</label>
              <input type="email" placeholder="your@email.com" />
            </div>
          </div>

          <div className="c-field">
            <label>Phone Number</label>
            <input type="tel" placeholder="(505) 000-0000" />
          </div>

          <div className="c-field">
            <label>Message</label>
            <textarea
              rows={4}
              placeholder="Tell us about your smile goals or any questions you have…"
            />
          </div>

          <button className="c-submit" type="submit">
            Send Message →
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contactform;