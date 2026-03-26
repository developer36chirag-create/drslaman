import React, { useEffect, useState } from 'react';
import './Navbar.css';
 
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
 
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
 
  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="nav-left">
        <a href="#services">Services</a>
        <a href="/about">About</a>
        <a href="#reviews">Reviews</a>
      </div>
 
      <a href="/" className="nav-logo">
        <span className="nav-logo-mark">James Slaman</span>
        <span className="nav-logo-sub">DDS, PC · Albuquerque, NM</span>
      </a>
 
      <div className="nav-right">
        <a href="#technology">Technology</a>
        <a href="#financing">Financing</a>
        <a href="#office">Office</a>
        <a href="#contact" className="nav-cta">Book Now</a>
      </div>
    </nav>
  );
}