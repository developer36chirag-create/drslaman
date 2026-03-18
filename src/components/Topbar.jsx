import React from 'react';
import './Topbar.css';
 
export default function TopBar({ menuOpen, onMenuToggle }) {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <a href="tel:5052268598">
          <span className="tb-ico">☎</span> (505) 226-8598
        </a>
        <span className="tb-divider" />
        <a href="#office">
          <span className="tb-ico">◎</span> Location
        </a>
      </div>
 
      <div className="top-bar-right">
        <a href="#contact">Contact</a>
        <button
          className={`menu-toggle${menuOpen ? ' open' : ''}`}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
          onClick={onMenuToggle}
        >
          <span className="menu-label">{menuOpen ? 'Close' : 'Menu'}</span>
          <span className="hbg">
            <span /><span /><span />
          </span>
        </button>
      </div>
    </div>
  );
}