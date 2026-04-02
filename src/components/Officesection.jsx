import React from "react";
import "./Officesection.css";

const Officesection = () => {
  return (
    <section id="office" className="office-split">
      <div className="office-copy">
        <p className="sec-tag">Visit Us</p>

        <h2 className="sec-h">
          Albuquerque<br />
          <em>Office</em>
        </h2>

        <div className="o-row">
          <span className="o-ico">
            <img src="/maps-and-flags.png" alt="Address" />
          </span>
          <div>
            <div className="o-lbl">Address</div>
            <div className="o-val">
              8650 Alameda Blvd NE, Ste 104E<br />
              Albuquerque, NM 87122
            </div>
          </div>
        </div>

        <div className="o-row">
          <span className="o-ico">
            <img src="/time.png" alt="Hours" />
          </span>
          <div>
            <div className="o-lbl">Hours</div>
            <div className="o-val">
              Open Today 7:30 AM – 4:30 PM
            </div>
          </div>
        </div>

        <div className="o-row">
          <span className="o-ico">
            <img src="/phone-call.png" alt="Phone" />
          </span>
          <div>
            <div className="o-lbl">Phone</div>
            <div className="o-val">
              <a href="tel:5052268598">(505) 226-8598</a>
            </div>
          </div>
        </div>

        <div className="office-btns">
          <a href="#" className="o-btn fill">
            About Our Office
          </a>

          <a
            href="https://maps.google.com/?q=8650+Alameda+Blvd+NE+Albuquerque+NM+87122"
            target="_blank"
            rel="noopener noreferrer"
            className="o-btn ghost"
          >
            Directions →
          </a>

          <a href="tel:5052268598" className="o-btn ghost">
            (505) 226-8598
          </a>
        </div>
      </div>

      <div className="office-map" />
    </section>
  );
};

export default Officesection;