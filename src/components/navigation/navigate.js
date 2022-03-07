/**
 * Navbar that will be imported to the home page
 */

import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { scroller } from 'react-scroll';

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
          <Nav.Link
            onClick={() =>
              scroller.scrollTo('project', {
                smooth: true,
                duration: 0,
                activeClass: 'active',
              })
            }
          >
            Projects
          </Nav.Link>

          <Nav.Link
            onClick={() =>
              scroller.scrollTo('about', {
                smooth: true,
                duration: 0,
                activeClass: 'active',
              })
            }
          >
            Contact
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigate;
