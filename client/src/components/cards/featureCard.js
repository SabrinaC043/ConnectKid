import React from "react";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// import { Player } from "video-react";
// import "node_modules/video-react/dist/video-react.css";

const FeatureCard = ({
  author,
  quoteDay,
  quoteOfTheDay,
  tableTopics,
  conversationStarters,
}) => {
  return (
    /* <Card className="text-center col-12 border" style={{marginTop: "100px"}}>
    <Card.Body>
        <Card.Title><u>{props.title}</u></Card.Title>
        <Card.Subtitle>{props.date}</Card.Subtitle>
        <Card.Text>{props.time}</Card.Text>

        <Card.Text>{props.text}</Card.Text>

    </Card.Body>
    </Card> */
    <>
      <Container fluid>
        <Row className="justify-content-around" style={{ marginTop: "200px" }}>
          <Col xs={12} md={5} style={{ minHeight: "200px", minWidth: "200px" }}>
            <Card className="text-center">
              <Card.Body>
                <Card.Title>
                  <h5> {conversationStarters}</h5>
                  <p>{tableTopics}</p>
                </Card.Title>
                <Card.Subtitle>
                  <h6>
                    <i> {quoteOfTheDay}</i>
                  </h6>
                  <i>
                    <text>{quoteDay}</text>
                  </i>
                </Card.Subtitle>
                <Card.Subtitle>
                  <p> {author}</p>
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FeatureCard;
