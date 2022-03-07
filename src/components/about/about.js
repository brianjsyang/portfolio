/**
 * This page will include "about me" and other contact information
 */
import React from 'react';
import { Container, Image, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';

import './about.styles.scss';
import logo from '../../assets/glasses-logo-white.png';

function About() {
  return (
    <Container fluid className="content about">
      <Row className="footer header">I am open to work!</Row>
      <Row className="footer sns">
        <div className="icon-links">
          <a
            href="https://www.linkedin.com/in/brianjsyang/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              className="icon-logo"
              icon={brands('linkedin')}
              size={'lg'}
            />
          </a>

          <a
            href="https://github.com/brianjsyang"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              className="icon-logo"
              icon={brands('github')}
              size={'lg'}
            />
          </a>
        </div>
        <div>
          <Image className="logo-image" src={logo} />
        </div>
      </Row>
    </Container>
  );
}

export default About;
