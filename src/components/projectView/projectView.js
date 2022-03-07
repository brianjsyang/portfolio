import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

import './projectView.styles.scss';

import yugafu from '../../assets/project-img/homepage.png';
import empr from '../../assets/project-img/shoppage.png';
import recipes from '../../assets/project-img/search_function.png';
import banking from '../../assets/project-img/review.png';

const ProjectView = () => {
  return (
    <Container fluid className="content projectView">
      <div className="project-header">Here are some things I've done</div>
      <Row className="rows">
        <Col lg={{ span: 6, offset: 3 }}>
          <Row className="projects first" xs={1} sm={2}>
            <Col>
              <Card>
                <Card.Img src={yugafu} />
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Yugafu Japanese Bistro</Card.Title>
                  <Card.Text>
                    Website for the client's restaurant featuring Instagram
                    links and customer reviews. <br />
                    <a
                      href="https://yugafu-wip.herokuapp.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Link to website!
                    </a>
                  </Card.Text>
                  <Card.Footer className="text-muted">
                    React / Bootstrap
                  </Card.Footer>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="projects second" xs={1} sm={2}>
            <Col>
              <Card>
                <Card.Img src={empr} />
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>EMPR Ecommerce</Card.Title>
                  <Card.Text>
                    Ecommerce website with Google Login and Database using
                    Firebase, and Online payment using Stripe. <br />
                    <a
                      href="http://empr-ecommerce.herokuapp.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Link to website!
                    </a>
                  </Card.Text>
                  <Card.Footer className="text-muted">
                    React / Firebase / Stripe
                  </Card.Footer>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="projects third" xs={1} sm={2}>
            <Col>
              <Card>
                <Card.Img src={recipes} />
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Forkify</Card.Title>
                  <Card.Text>
                    Javascript project utilizing API calls and pagination
                  </Card.Text>
                  <Card.Footer className="text-muted">Javascript</Card.Footer>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="projects fourth" xs={1} sm={2}>
            <Col>
              <Card>
                <Card.Img src={banking} />
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Sample Banking Website</Card.Title>
                  <Card.Text>
                    Javascript website with CSS tricks featuring sideway
                    scrolling, tabs, select animations, and more.
                  </Card.Text>
                  <Card.Footer className="text-muted">Javascript</Card.Footer>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectView;
