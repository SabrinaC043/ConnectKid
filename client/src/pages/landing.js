import React from "react";
import FeatureCard from "../components/cards/featureCard";
import BasicCard from "../components/cards/card";
import Sidebar from "../components/Sidebar";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";

export default function Landing() {
  return (
    <>
      {/* <h1>LANDING</h1>
      <Sidebar /> ? how to handle calendar 'apply' button? Do we only want
      Calendar on events.js? */}
      <Container fluid className="text-center">
        <Row className="align-items-center" style={{ marginTop: "100px" }}>
          <Col>
            <Stack gap={1}>
              <div
                className=""
                xs={12}
                md={5}
                style={{ minHeight: "200px", minWidth: "100px" }}
              >
                {/* <FeatureCard />
                
                Area to import the FeatureCard

                */}

                <Card style={{ minHeight: "100px", minWidth: "200px" }}>
                  <h2>Upcoming Virtual Zoom Cooking Class</h2>
                  <p>Link to Zoom</p>
                </Card>
              </div>
              <div>
                <BasicCard />
                {/* <Card style={{ minHeight: "100px", minWidth: "100px" }}>
                  <h4>Event details</h4>
                  <p>Ingredients:</p>
                  <p>Tips:</p>
                </Card> */}
              </div>
            </Stack>
          </Col>
          <Col xs={12} md={5} style={{ minHeight: "400px", minWidth: "200px" }}>
            <Card style={{ minHeight: "400px", minWidth: "200px" }}>
              <h3>Recommended Event</h3>
              <p>Not a neccessary feature</p>
            </Card>
          </Col>
        </Row>
      </Container>
      {/* <FeatureCard
        title={'title'}
        date={'date'}
        time={'time'}
        text={'text'}
      /> */}
    </>
  );
}
