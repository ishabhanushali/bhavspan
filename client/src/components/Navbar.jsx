import "./Navbar.css";
import { useState, useEffect } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // ✅ added

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={scrolled ? "navbar scrolled" : "navbar"}>
      <div className="logo">BHAVSPAN INFO LLP</div>

      {/* ✅ nav links */}
      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <a href="/" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="/about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="/services" onClick={() => setMenuOpen(false)}>Services</a>
        <a href="/contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </div>

      {/* ✅ hamburger */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
    </nav>
  );
}

export default Navbar;
