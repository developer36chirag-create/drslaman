import React from 'react';
import './Footer.css';
 
export default function Footer() {
  return (
    <footer>
      <div className="ft-top">
        <span className="ft-brand">James Slaman, DDS, PC</span>
        <div className="ft-links">
          <a href="#">Sitemap</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Login</a>
        </div>
      </div>
      <div className="ft-copy">
        ©1992 – 2026 Dr James Slaman | Forever Website™ 2.0 | Designed &amp; Developed by Einstein Dental
      </div>
      <div className="ft-disclaimer">
        *Disclaimer: results are not guaranteed, may not be permanent, and can vary per individual.
        Some images are of models, not actual patients.
      </div>
    </footer>
  );
}