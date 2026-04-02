import React from "react";
import "./Doctorpanel.css";

const DR_MEMS = [
  "American Dental Association",
  "American Academy of Implant Dentistry",
  "Academy of General Dentistry",
  "American Academy of Sleep Medicine",
  "American Academy of Cosmetic Dentistry",
  "Spear Faculty Club",
];

const Doctorpanel = () => {
  return (
    <div className="dr-panel">
      <div className="dr-panel-img">
        <img src="/Dr. James Slaman DDS.png" alt="Dr. James Slaman" />
      </div>

      <div className="dr-panel-body">
        <p className="sec-tag">About the Doctor</p>

        <h2>James Slaman, DDS, PC</h2>

        <p className="spec">
          Cosmetic &amp; Restorative Dentistry · Albuquerque, NM
        </p>

        <p>
          <strong>Dr. James Slaman</strong> specializes in{" "}
          <em style={{ color: "var(--c-terra)" }}>
            cosmetic dentistry
          </em>{" "}
          and offers a full selection of <strong>general</strong> and{" "}
          <strong>restorative treatments</strong>. Dr. Slaman is a
          member of various professional associations, including:
        </p>

        <div className="dr-mems">
          {DR_MEMS.map((m, index) => (
            <span className="dr-mem" key={index}>
              {m}
            </span>
          ))}
        </div>

        <p className="dr-contact">
          To request an appointment at our{" "}
          <strong>Albuquerque, NM dental office</strong>,{" "}
          <a href="#contact">contact us online</a> or call{" "}
          <a href="tel:5052268598">(505) 226-8598</a>.
        </p>
      </div>
    </div>
  );
};

export default Doctorpanel;