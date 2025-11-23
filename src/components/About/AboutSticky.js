import React, { useEffect, useState, useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Particle from "../Particle";

function AboutSticky() {
  const [activeSection, setActiveSection] = useState(0);
  const sectionsRef = useRef([]);

  // Helper function to safely load images
  const loadImage = (path) => {
    try {
      return require(`../../Assets/Skills/${path}`);
    } catch (e) {
      return null; // Return null if image doesn't exist
    }
  };

  const content = [
    {
      title: "Développeur Full Stack",
      description: "Je conçois des applications web robustes et évolutives. Ma maîtrise de React, Node.js et des architectures modernes me permet de transformer des idées complexes en solutions techniques performantes.",
      details: [
        "Frontend : React, Vue.js, HTML5, CSS3",
        "Backend : Node.js, Express, Python",
        "Base de données : MongoDB, PostgreSQL, SQL",
        "Outils : Git, Docker, AWS"
      ],
      color: "#c770f0", // Developer purple
      imagePlaceholders: ["Dev Image 1", "Dev Image 2", "Dev Image 3"],
      images: [
        loadImage("dev-1.png") || loadImage("dev-1.jpg"),
        loadImage("dev-2.png") || loadImage("dev-2.jpg"),
        loadImage("dev-3.png") || loadImage("dev-3.jpg")
      ]
    },
    {
      title: "UI/UX Designer",
      description: "L'expérience utilisateur est au cœur de ma démarche. Je crée des interfaces intuitives et esthétiques qui guident l'utilisateur tout en racontant une histoire visuelle cohérente.",
      details: [
        "Design System & Prototyping",
        "Figma, Adobe XD",
        "Recherche utilisateur & Personas",
        "Wireframing & Maquettes haute fidélité"
      ],
      color: "#38635b", // UI/UX Green
      imagePlaceholders: ["UI Image 1", "UI Image 2"],
      images: [
        loadImage("uiux-1.png") || loadImage("uiux-1.jpg"),
        loadImage("uiux-2.png") || loadImage("uiux-2.jpg")
      ]
    },
    {
      title: "Data Scientist",
      description: "Je fais parler les données. De l'analyse exploratoire à la modélisation prédictive, j'aide à prendre des décisions éclairées basées sur des insights concrets.",
      details: [
        "Analyse de données & Visualisation",
        "Python (Pandas, NumPy, Scikit-learn)",
        "Machine Learning & Deep Learning",
        "Tableau, PowerBI"
      ],
      color: "#c770f0", // Data purple
      imagePlaceholders: ["Data Image 1", "Data Image 2", "Data Image 3", "Data Image 4"],
      images: [
        loadImage("data-1.png") || loadImage("data-1.jpg"),
        loadImage("data-2.png") || loadImage("data-2.jpg"),
        loadImage("data-3.png") || loadImage("data-3.jpg"),
        loadImage("data-4.png") || loadImage("data-4.jpg")
      ]
    }
  ];

  const [currentImageIndices, setCurrentImageIndices] = useState(content.map(() => 0));

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const viewportCenter = windowHeight / 2;
      
      let closestIndex = 0;
      let minDistance = Infinity;
      
      sectionsRef.current.forEach((section, index) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          const elementCenter = rect.top + rect.height / 2;
          
          // Calculate distance from center
          const distance = Math.abs(viewportCenter - elementCenter);
          const maxDistance = windowHeight / 2;
          
          // Calculate opacity: 1 at center, fading to 0.2 at edges
          let opacity = 1 - (distance / maxDistance);
          opacity = Math.max(0.1, Math.min(1, opacity)); // Clamp between 0.1 and 1
          
          // Apply opacity directly to the element for performance
          section.style.opacity = opacity;
          section.style.transform = `scale(${0.9 + (opacity * 0.1)})`; // Subtle scale effect too
          
          // Track which section is closest to center (for sticky image)
          if (distance < minDistance && rect.top < viewportCenter && rect.bottom > viewportCenter) {
            minDistance = distance;
            closestIndex = index;
          }
        }
      });
      
      // Update active section to the one closest to viewport center
      setActiveSection(closestIndex);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const nextImage = (sectionIndex) => {
    setCurrentImageIndices(prev => {
      const newIndices = [...prev];
      const maxLength = content[sectionIndex].imagePlaceholders.length;
      newIndices[sectionIndex] = (newIndices[sectionIndex] + 1) % maxLength;
      return newIndices;
    });
  };

  const prevImage = (sectionIndex) => {
    setCurrentImageIndices(prev => {
      const newIndices = [...prev];
      const maxLength = content[sectionIndex].imagePlaceholders.length;
      newIndices[sectionIndex] = (newIndices[sectionIndex] - 1 + maxLength) % maxLength;
      return newIndices;
    });
  };

  return (
    <Container fluid className="about-section sticky-scroll-container">
      <Particle />
      <Container>
        <Row>
          <Col md={6} className="scroll-content">
            <div style={{ paddingBottom: "100px" }}>
              <h1 style={{ fontSize: "2.5em", paddingBottom: "20px" }}>
                Mes <strong className="purple">Compétences</strong>
              </h1>
              <p className="home-about-body">
                Découvrez mon expertise à travers ces différents domaines.
              </p>
            </div>

            {content.map((item, index) => (
              <div 
                key={index} 
                ref={el => sectionsRef.current[index] = el}
                className="sticky-section-text"
                style={{ 
                  minHeight: "80vh", 
                  display: "flex", 
                  flexDirection: "column", 
                  justifyContent: "center",
                  alignItems: "flex-start", // Align items to the left
                  textAlign: "left", // Ensure text is left-aligned
                  transition: "opacity 0.1s ease-out, transform 0.1s ease-out", 
                  opacity: 0.1 
                }}
              >
                {/* Mobile Image - Visible only on mobile */}
                <div className="mobile-visual-container d-md-none" style={{ 
                  width: "100%", 
                  height: "250px", 
                  marginBottom: "20px",
                  borderRadius: "20px",
                  background: `rgba(${parseInt(item.color.slice(1,3), 16)}, ${parseInt(item.color.slice(3,5), 16)}, ${parseInt(item.color.slice(5,7), 16)}, 0.1)`,
                  border: `1px solid ${item.color}40`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundImage: item.images[0] ? `url(${item.images[0]})` : "none",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}>
                   {/* Show placeholder text only if no image */}
                   {!item.images[0] && (
                     <span style={{ color: item.color, fontSize: "1.2em", fontWeight: "bold" }}>
                       {item.imagePlaceholders[0]}
                     </span>
                   )}
                </div>

                <h2 style={{ color: item.color, fontSize: "24px", lineHeight: "25.92px", marginBottom: "20px" }}>{item.title}</h2>
                <p className="home-about-body" style={{ fontSize: "20px", lineHeight: "26px" }}>
                  {item.description}
                </p>
                <ul style={{ textAlign: "left", marginTop: "20px" }}>
                  {item.details.map((detail, i) => (
                    <li key={i} style={{ fontSize: "20px", lineHeight: "26px", marginBottom: "10px", listStyleType: "none" }}>
                      <span style={{ color: item.color, marginRight: "10px" }}>▹</span> {detail}
                    </li>
                  ))}
                </ul>
                
                {/* CTA Button */}
                <Button 
                  variant="primary" 
                  href="mailto:souleymane.maiga@example.com" // Replace with actual contact link or anchor
                  style={{ marginTop: "20px", fontSize: "18px", padding: "10px 25px" }}
                >
                  Me contacter pour un projet {item.title.split(" ")[0]}
                </Button>
              </div>
            ))}
            <div style={{ height: "20vh" }}></div>
          </Col>
          
          <Col md={6} className="sticky-visual-container">
            <div className="sticky-visual-wrapper">
              {content.map((item, index) => (
                <div 
                  key={index}
                  className={`sticky-visual-item ${activeSection === index ? "active" : ""}`}
                  style={{ 
                    borderColor: item.color,
                    boxShadow: activeSection === index ? `0 0 20px ${item.color}40` : "none"
                  }}
                >
                  <div className="carousel-container" style={{ width: "100%", height: "100%", position: "relative", overflow: "hidden" }}>
                    
                    {/* Image or Placeholder */}
                    <div className="placeholder-image" style={{ 
                      backgroundColor: `${item.color}20`, 
                      width: "100%", 
                      height: "100%", 
                      display: "flex", 
                      alignItems: "center", 
                      justifyContent: "center",
                      backgroundImage: item.images[currentImageIndices[index]] 
                        ? `url(${item.images[currentImageIndices[index]]})` 
                        : "none",
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center"
                    }}>
                      {/* Show text only if no image is loaded at this index */}
                      {!item.images[currentImageIndices[index]] && (
                        <span style={{ color: item.color, fontSize: "1.5em", fontWeight: "bold" }}>
                          {item.imagePlaceholders[currentImageIndices[index]]}
                        </span>
                      )}
                    </div>

                    {/* Navigation Buttons */}
                    {item.imagePlaceholders.length > 1 && (
                      <>
                        <button 
                          className="carousel-btn prev" 
                          onClick={() => prevImage(index)}
                          style={{ color: item.color }}
                        >
                          <FaChevronLeft />
                        </button>
                        <button 
                          className="carousel-btn next" 
                          onClick={() => nextImage(index)}
                          style={{ color: item.color }}
                        >
                          <FaChevronRight />
                        </button>
                        
                        {/* Dots Indicator */}
                        <div className="carousel-dots">
                          {item.imagePlaceholders.map((_, imgIndex) => (
                            <span 
                              key={imgIndex} 
                              className={`dot ${imgIndex === currentImageIndices[index] ? "active" : ""}`}
                              style={{ backgroundColor: imgIndex === currentImageIndices[index] ? item.color : "rgba(255,255,255,0.3)" }}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default AboutSticky;
