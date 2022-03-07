/**
 * Navbar that will be imported to the home page
 */

import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-scroll';

import './navigate.styles.scss';
import logo from '../../assets/glasses-logo.png';

function Navigate() {
  return (
    <Navbar bg="light" expand="lg" className="position">
      <Container>
        <Navbar.Brand>
          <Image src={logo} alt="logo" width="40" height="40" />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link>
            <Link
              activeClass="active"
              to="project"
              spy={true}
              smooth={true}
              duration={0}
            >
              Projects
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={0}
            >
              Contact
            </Link>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigate;
