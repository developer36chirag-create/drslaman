import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* TOP BAR */}
      <div className="top-bar">
        <div className="top-bar-left">
          <a href="tel:5052269210">
            <span className="tb-ico">☎</span>
            (505) 226-8598
          </a>
          <span className="tb-divider"></span>
          <a href="#office">
            <span className="tb-ico">◎</span>
            Location
          </a>
        </div>

        <div className="top-bar-right">
          <a href="#contact">Contact</a>

          <button
            className={`menu-toggle ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="menu-label-close">Menu</span>
            <span className="menu-label-open">Close</span>

            <span className="hbg">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
      </div>

      {/* NAV */}
      <nav className="nav">
        <div className="nav-left">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#reviews">Reviews</a>
        </div>

        <a href="#" className="nav-logo">
          <span className="nav-logo-mark">James Slaman</span>
          <span className="nav-logo-sub">DDS, PC · Albuquerque, NM</span>
        </a>

        <div className="nav-right">
          <a href="#technology">Technology</a>
          <a href="#financing">Financing</a>
          <a href="#office">Office</a>
          <a href="#contact" className="nav-cta">
            Book Now
          </a>
        </div>
      </nav>
    </>
  );
}