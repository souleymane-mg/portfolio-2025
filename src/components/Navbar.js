import React, { useState, useEffect, useContext } from "react";
import logoSoul from "../Assets/logoSoul.png";
import Button from "react-bootstrap/Button";
import {
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn, FaBars, FaTimes } from "react-icons/fa";
import { FaCode, FaPalette, FaChartLine } from "react-icons/fa";
import { SpecialityContext } from "../App";

function NavBar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const specialityContext = useContext(SpecialityContext);
  
  const handleSpecialityChange = (speciality) => {
    if (specialityContext && specialityContext.setActiveSpeciality) {
      specialityContext.setActiveSpeciality(speciality);
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 100) {
        // Toujours visible en haut de page
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scroll vers le bas - cacher
        setIsVisible(false);
        setIsMobileMenuOpen(false); // Fermer le menu en scrollant
      } else {
        // Scroll vers le haut - afficher
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Hauteur de la navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false); // Fermer le menu après navigation
    }
  };

  const scrollToHome = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar-single-page ${isVisible ? "visible" : "hidden"}`}>
        {/* Desktop */}
        <div className="navbar-desktop">
          <div className="navbar-logo-section">
            <button 
              onClick={scrollToHome}
              className="logo-btn"
            >
              <img src={logoSoul} className="logo-img" alt="Souleymane Ibrahim Maïga - Logo" />
            </button>
          </div>

          <div className="navbar-menu-section">
            <div className="navbar-menu-glass">
              <button
                onClick={() => scrollToSection("about")}
                className="navbar-menu-btn"
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> À propos
              </button>

              <button
                onClick={() => scrollToSection("projects")}
                className="navbar-menu-btn"
              >
                <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} /> Projets
              </button>

              <Button
                href="https://github.com/souleymane-mg"
                target="_blank"
                rel="noreferrer"
                className="navbar-social-btn"
                aria-label="GitHub"
              >
                <AiFillGithub style={{ fontSize: "1.2em" }} />
              </Button>

              <Button
                href="https://www.linkedin.com/in/souleymane-ibrahim-maïga-69b700376/"
                target="_blank"
                rel="noreferrer"
                className="navbar-social-btn"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn style={{ fontSize: "1.1em" }} />
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="navbar-mobile">
          <button
            className="mobile-hamburger-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <button 
            onClick={scrollToHome}
            className="mobile-logo-btn"
          >
            <img src={logoSoul} className="mobile-logo-img" alt="Logo" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? "open" : ""}`} onClick={() => setIsMobileMenuOpen(false)}>
        <div className="mobile-menu-content" onClick={(e) => e.stopPropagation()}>
          {/* Section Compétences Métier */}
          <div className="mobile-menu-section">
            <h3 className="mobile-menu-section-title">Compétences Métier</h3>
            <div className="mobile-menu-items">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleSpecialityChange("developer");
                }}
                className="mobile-menu-item"
                type="button"
              >
                <FaCode /> Développeur
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleSpecialityChange("uiux");
                }}
                className="mobile-menu-item"
                type="button"
              >
                <FaPalette /> UI/UX Designer
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleSpecialityChange("data");
                }}
                className="mobile-menu-item"
                type="button"
              >
                <FaChartLine /> Data Scientist
              </button>
            </div>
          </div>

          {/* Section Navigation */}
          <div className="mobile-menu-section">
            <h3 className="mobile-menu-section-title">Navigation</h3>
            <div className="mobile-menu-items">
              <button
                onClick={() => scrollToSection("about")}
                className="mobile-menu-item"
              >
                <AiOutlineUser /> À propos
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="mobile-menu-item"
              >
                <AiOutlineFundProjectionScreen /> Projets
              </button>
              <Button
                href="https://github.com/souleymane-mg"
                target="_blank"
                rel="noreferrer"
                className="mobile-menu-item mobile-social-btn"
                aria-label="GitHub"
              >
                <AiFillGithub /> GitHub
              </Button>
              <Button
                href="https://www.linkedin.com/in/souleymane-ibrahim-maïga-69b700376/"
                target="_blank"
                rel="noreferrer"
                className="mobile-menu-item mobile-social-btn"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn /> LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
