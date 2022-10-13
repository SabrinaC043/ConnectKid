import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const About = () => {
  return (
    <Container fluid>
      <Row className="justify-content-around" style={{ marginTop: "200px" }}>
        <Col
          xs={12}
          md={5}
          border="primary"
          style={{ minHeight: "200px", minWidth: "200px" }}
        >
          <Card>
            <h2>Mission & Values</h2>
            <h3>This is our mission</h3>
            <p>these are our values</p>
          </Card>
        </Col>
        <Col
          xs={12}
          md={5}
          className="border"
          style={{ minHeight: "200px", minWidth: "200px" }}
        >
          <Card>
            <h2>Images</h2>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;

// This may not work with react-router-dom, mine didn't the first time around.
