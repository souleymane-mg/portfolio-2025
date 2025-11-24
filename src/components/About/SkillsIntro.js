import React, { useEffect, useState, useContext } from "react";
import { Container } from "react-bootstrap";
import { SpecialityContext } from "../../App";
import {
  SiReact,
  SiNodedotjs,
  SiPython,
  SiJavascript,
  SiGit,
  SiDocker,
  SiMongodb,
  SiPostgresql,
  SiFigma,
  SiAdobexd,
  SiPandas,
  SiTensorflow,
  SiTableau,
} from "react-icons/si";
import {
  FaPalette,
  FaPencilRuler,
  FaChartLine,
  FaDatabase,
  FaCode,
  FaLaptopCode,
  FaCheckCircle,
  FaFolder,
  FaTerminal,
} from "react-icons/fa";

function SkillsIntro() {
  const { activeSpeciality } = useContext(SpecialityContext);
  const [floatingIcons, setFloatingIcons] = useState([]);

  // Icon sets for each speciality
  const iconSets = {
    developer: [
      SiReact,
      SiNodedotjs,
      SiPython,
      SiJavascript,
      SiGit,
      SiDocker,
      SiMongodb,
      SiPostgresql,
      FaCode,
      FaLaptopCode,
      FaCheckCircle,
      FaFolder,
      FaTerminal,
    ],
    uiux: [
      SiFigma,
      SiAdobexd,
      FaPalette,
      FaPencilRuler,
      SiReact,
      SiJavascript,
      FaCode,
      FaCheckCircle,
    ],
    data: [
      SiPython,
      SiPandas,
      SiTensorflow,
      SiTableau,
      FaChartLine,
      FaDatabase,
      SiMongodb,
      SiPostgresql,
      FaTerminal,
      FaCheckCircle,
    ],
  };

  // Generate floating icons with random animation properties
  useEffect(() => {
    const currentIcons = iconSets[activeSpeciality] || iconSets.developer;
    
    // Repeat icons to fill the width (triple the array)
    const repeatedIcons = [...currentIcons, ...currentIcons, ...currentIcons];
    
    const icons = repeatedIcons.map((Icon, index) => ({
      Icon,
      id: index,
      duration: Math.random() * 3 + 4, // 4-7 seconds
      delay: Math.random() * 2, // 0-2 seconds
      distance: Math.random() * 40 + 20, // 20-60px
    }));
    setFloatingIcons(icons);
  }, [activeSpeciality]);

  return (
    <div className="skills-intro-section">
      <Container>
        <div className="skills-intro-content">
          <h1>
            Mes <strong className="purple">Compétences</strong>
          </h1>
          <p className="skills-intro-text">
            Découvrez mon expertise à travers ces différents domaines.
          </p>
        </div>
      </Container>

      {/* Floating Icons Row - Outside Container for full width */}
      <ul className="floating-icons-row">
        {floatingIcons.map((iconData) => {
          const IconComponent = iconData.Icon;
          return (
            <li
              key={iconData.id}
              className="floating-icon-item"
              style={{
                "--float-duration": `${iconData.duration}s`,
                "--float-delay": `${iconData.delay}s`,
                "--float-distance": `${iconData.distance}px`,
              }}
            >
              <div className="icon-bouncer">
                <IconComponent />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SkillsIntro;
