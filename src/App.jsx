import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import TopBar from "./components/Topbar";
import MegaMenu from "./components/Megamenu";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Doctor from './pages/Doctor'

import "./App.css";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => {
    setMenuOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = "";
  };

  const toggleMenu = () => (menuOpen ? closeMenu() : openMenu());

  // Close on Escape key
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Scroll reveal
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const els = document.querySelectorAll(".sr");
    els.forEach((el, i) => {
      el.style.transitionDelay = (i % 4) * 0.07 + "s";
      io.observe(el);
    });

    return () => io.disconnect();
  }, []);

  return (
    <>
      <TopBar menuOpen={menuOpen} onMenuToggle={toggleMenu} />
      <MegaMenu open={menuOpen} onClose={closeMenu} />
      <Navbar />

      {/* ✅ ROUTING STARTS HERE */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/doctor" element={<Doctor />} />
      </Routes>
      {/* ✅ ROUTING ENDS HERE */}

      <Footer />
    </>
  );
}