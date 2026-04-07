import React from 'react';
import './Megamenu.css';
import { Link } from "react-router-dom";
 
const PHOTOS = [
  { src: '/jose-vazquez-4SUyx4KQ5Ik-unsplash\ \(1\).jpg', label: 'About the Practice' },
  { src: '/photo-1606811841689-23dfddce3e95.jpg', label: 'Cosmetic Dentistry' },
  { src: '/photo-1629909613654-28e377c37b09.jpg', label: 'Restorative Dentistry' },
  { src: '/photo-1588776814546-1ffcf47267a5.jpg', label: 'General Dentistry' },
];
 
const COLS = [
  {
    title: 'About the Practice',
    links: [
      { label: 'About the Practice', href: '/about' },
      { label: 'James Slaman, DDS, PC', href: '/doctor' },
      { label: 'Albuquerque Office', href: '/office' },
      { label: 'Patient Forms', href: '#' },
      { label: 'Testimonials', href: '#reviews' },
      { label: 'Photo Gallery', href: '#' },
      { label: 'Blog', href: '#' },
    ],
  },
  {
    title: 'Cosmetic Dentistry',
    links: [
      { label: 'Cosmetic Dentistry', href: '/services/cosmetic-dentistry' },
      { label: 'Dental Bonding', href: '/services/dental-bonding' },
      { label: 'Gum Contouring', href: '/services/gum-contouring' },
      { label: 'Smile Makeover', href: '/services/smile-makeover' },
      { label: 'Teeth Whitening', href: '#' },
      { label: 'Veneers', href: '#' },
    ],
  },
  {
    title: 'Restorative Dentistry',
    links: [
      { label: 'Restorative Dentistry', href: '#' },
      { label: 'Bone Graft', href: '#' },
      { label: 'Dental Bridges', href: '#' },
      { label: 'Dental Crowns', href: '#' },
      { label: 'CEREC', href: '#' },
      { label: 'Dental Implants', href: '#' },
      { label: 'Dentures', href: '#' },
      { label: 'Full Mouth Reconstruction', href: '#' },
      { label: 'Implant-Supported Bridges', href: '#' },
      { label: 'Implant-Supported Crowns', href: '#' },
      { label: 'Implant-Supported Dentures', href: '#' },
    ],
  },
  {
    title: 'General Dentistry',
    links: [
      { label: 'General Dentistry', href: '#' },
      { label: 'Dental Sealants', href: '#' },
      { label: 'Dental Technology', href: '#technology' },
      { label: 'Fluoride Treatment', href: '#' },
      { label: 'Gum Disease', href: '#' },
      { label: 'Inlays & Onlays', href: '#' },
      { label: 'Laser Dentistry', href: '#' },
      { label: 'Missing Teeth', href: '#' },
      { label: 'Sleep Apnea Treatment', href: '#' },
      { label: 'Tooth-Colored Fillings', href: '#' },
      { label: 'Tooth Extraction', href: '#' },
    ],
  },
];
 
export default function MegaMenu({ open, onClose }) {
  return (
    <>
      {/* Backdrop */}
      <div
        className={`mega-backdrop${open ? ' open' : ''}`}
        onClick={onClose}
      />
 
      {/* Panel */}
      <div className={`mega-menu${open ? ' open' : ''}`} aria-hidden={!open}>
        <div className="mega-menu-inner">
 
          {/* 4 Photos */}
          <div className="mega-photos">
            {PHOTOS.map((p) => (
              <div className="mega-photo" key={p.label}>
                <img src={p.src} alt={p.label} />
                <div className="mega-photo-label">{p.label}</div>
              </div>
            ))}
          </div>
 
          {/* 4 Link Columns */}
          <div className="mega-cols">
            {COLS.map((col) => (
              <div className="mega-col" key={col.title}>
                <div className="mega-col-title">{col.title}</div>
                <ul>
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} onClick={onClose}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
 
          {/* Footer bar */}
          <div className="mega-footer">
            <a href="#services" className="mega-view-all" onClick={onClose}>
              <span className="line" />
              View All Services
              <span className="line r" />
            </a>
          </div>
 
        </div>
      </div>
    </>
  );
}