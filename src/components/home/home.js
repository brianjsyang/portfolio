/**
 * Landing page for the website.
 * All other components will be below the home page.
 *
 * 1. Built Nav bar
 * 2. Nav bar should navigate to selected page (slow scroll)
 *
 * Additional Ideas
 * 1. Animate texts "Computer Science Graduate" (udemy: 50 projects in 50 days)
 */
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import TypewriterComponent from 'typewriter-effect';

import Navigate from '../navigation/navigate';
import './home.styles.scss';

const Home = () => {
  return (
    <Container fluid className="content home">
      <Navigate />
      <Row className="landing name">
        <div>
          Hello, <br /> My name is Brian
        </div>
      </Row>
      <Row className="landing description">
        <span>
          I am a
          <TypewriterComponent
            options={{
              strings: ['Programmer', 'Gamer', 'Movie Lover'],
              autoStart: true,
              loop: true,
            }}
          />
        </span>
      </Row>
    </Container>
  );
};

export default Home;
