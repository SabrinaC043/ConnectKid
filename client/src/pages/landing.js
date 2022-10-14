import React from "react";
import FeatureCard from "../components/cards/featureCard";
import BasicCard from "../components/cards/card";
import Sidebar from "../components/Sidebar";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
import backgroundImage from "../assets/images/eventBackground.jpg";

export default function Landing() {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    height: "max-content",
    paddingBottom: "200px",
  };
  return (
    <Container fluid className="text-center" style={backgroundStyle}>
      <Row className="align-items-center" style={{ paddingTop: "100px" }}>
        <Col>
          <Stack gap={1}>
            <div
              xs={12}
              md={5}
              style={{ minHeight: "200px", minWidth: "100px" }}
            >
              <Card style={{ minHeight: "100px", minWidth: "200px" }}>
                <FeatureCard />
              </Card>
            </div>
            <div>
              <Card style={{ minHeight: "100px", minWidth: "100px" }}>
                <BasicCard />
              </Card>
            </div>
          </Stack>
        </Col>
        <Col xs={12} md={5} style={{ minHeight: "400px", minWidth: "200px" }}>
          <Card style={{ minHeight: "400px", minWidth: "200px" }}>
            <BasicCard />
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
