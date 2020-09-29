import React from "react";
import { Link } from "react-scroll";

const Nav = (props) => {
  return (
    <header>
      <nav className={props.class}>
        <a className="logo" href="/" aria-label="home">
          R
        </a>
        <div className="main nav">
          <ul className="nav-list">
            <li>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                offset={0}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="experience"
                smooth={true}
                spy={true}
                duration={500}
                offset={0}
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="projects"
                smooth={true}
                spy={true}
                duration={500}
                offset={0}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="contact"
                smooth={true}
                spy={true}
                duration={500}
                offset={0}
              >
                Contact
              </Link>
            </li>
          </ul>
          <a className="resume" href="/resume">
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
