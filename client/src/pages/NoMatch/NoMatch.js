import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import {NavLink} from "react-router-dom";
import Footer from '../../components/Footer';

const NoMatch = () => (
  <Container fluid>
    <Row>
      <Col size="md-12">
        <Jumbotron>
          <h1>Sorrrrrrryyyyy!!!! 404 Page Not Found</h1>
          <h1>
            <span role="img" aria-label="Face With Rolling Eyes Emoji">
              🙄
            </span>
          </h1>
          <h3><NavLink to="/" style={{"textDecoration": "none"}}>Back to Home</NavLink></h3>
          
        </Jumbotron>
      </Col>
    </Row>
    <Footer />
  </Container>
);

export default NoMatch;
