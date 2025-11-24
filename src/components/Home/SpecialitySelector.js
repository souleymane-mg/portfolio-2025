import React, { useState, useEffect, useContext } from "react";
import { 
  FaCode, 
  FaPalette, 
  FaChartLine 
} from "react-icons/fa";
import { SpecialityContext } from "../../App";

function SpecialitySelector({ activeSpeciality, onSpecialityChange }) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const specialityContext = useContext(SpecialityContext);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 100) {
        // Toujours visible en haut de page
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scroll vers le bas - cacher
        setIsVisible(false);
      } else {
        // Scroll vers le haut - afficher
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleSpecialityClick = (specialityId) => {
    // Utiliser le contexte si disponible, sinon utiliser la prop
    if (specialityContext && specialityContext.setActiveSpeciality) {
      specialityContext.setActiveSpeciality(specialityId);
    } else if (onSpecialityChange) {
      onSpecialityChange(specialityId);
    }
    // Remonter en haut de la page - DÉSACTIVÉ pour garder la position de scroll
    // window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const specialities = [
    {
      id: "developer",
      label: "Développeur",
      icon: <FaCode />,
    },
    {
      id: "uiux",
      label: "UI/UX",
      icon: <FaPalette />,
    },
    {
      id: "data",
      label: "Data",
      icon: <FaChartLine />,
    },
  ];

  // Utiliser le contexte pour activeSpeciality si disponible
  const currentSpeciality = specialityContext?.activeSpeciality || activeSpeciality;

  return (
    <div className={`speciality-selector-fixed ${isVisible ? "visible" : "hidden"}`}>
      <div className="speciality-selector">
        {specialities.map((speciality) => (
          <button
            key={speciality.id}
            className={`speciality-btn ${currentSpeciality === speciality.id ? "active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleSpecialityClick(speciality.id);
            }}
            aria-label={`Sélectionner ${speciality.label}`}
            type="button"
          >
            <span className="speciality-icon">{speciality.icon}</span>
            <span className="speciality-label">{speciality.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default SpecialitySelector;

