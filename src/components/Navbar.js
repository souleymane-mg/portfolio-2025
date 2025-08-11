import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
// import logo from "../Assets/logo.png";
import logoSoul from "../Assets/logoSoul.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork, CgFileDocument } from "react-icons/cg";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

function NavBar() {
  const [expanded, setExpanded] = useState(false);
  const [navColour, setNavColour] = useState(false);

  useEffect(() => {
    const onScroll = () => setNavColour(window.scrollY >= 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar
      expanded={expanded}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex" onClick={() => setExpanded(false)}>
          <img src={logoSoul} className="img-fluid logo" alt="Souleymane Ibrahim Maïga - Logo" />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(prev => !prev)}
        >
          <span></span><span></span><span></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Accueil
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/about" onClick={() => setExpanded(false)}>
                <AiOutlineUser style={{ marginBottom: "2px" }} /> À propos
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/project" onClick={() => setExpanded(false)}>
                <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} /> Projets
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/resume" onClick={() => setExpanded(false)}>
                <CgFileDocument style={{ marginBottom: "2px" }} /> CV
              </Nav.Link>
            </Nav.Item>

            {/* Optionnel : lien blog (décommente si tu en as un)
            <Nav.Item>
              <Nav.Link href="https://ton-blog.example.com" target="_blank" rel="noreferrer">
                <ImBlog style={{ marginBottom: "2px" }} /> Blog
              </Nav.Link>
            </Nav.Item>
            */}

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/souleymane-mg"
                target="_blank"
                rel="noreferrer"
                className="fork-btn-inner"
                aria-label="GitHub"
              >
                <AiFillGithub style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em", marginLeft: 6 }} />
              </Button>
            </Nav.Item>

            <Nav.Item className="fork-btn" style={{ marginLeft: 8 }}>
              <Button
                href="https://www.linkedin.com/in/souleymane-ibrahim-maïga-69b700376/"
                target="_blank"
                rel="noreferrer"
                className="fork-btn-inner"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
