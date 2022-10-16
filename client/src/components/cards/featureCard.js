import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { WEEKLY } from "../../utils/apollo/queries";
const FeatureCard = (props) => {
  const { loading, err, data } = useQuery(WEEKLY);
  const weekly = data?.weekly || [];
  if (loading) {
    return <p>Loading</p>;
  }

  if (err) {
    return <p>Err</p>;
  }
  console.log(weekly);
  return (
    // <Card className="text-center col-9 border" style={{marginTop: "200px"}}>
    // <Card.Body>
    //     <Card.Title><u>{props.title}</u></Card.Title>
    //     <Card.Subtitle>{props.date}</Card.Subtitle>
    //     <Card.Text>{props.time}</Card.Text>

    //     <Card.Text>{props.text}</Card.Text>

    // </Card.Body>
    // </Card>

    // <Container fluid>

    // <Row className="justify-content-around" style={{marginTop: "200px"}}>

    // <Col xs={12} md={5} style={{minHeight: "200px", minWidth: "200px"}}>
    <Card className="text-center">
      <Card.Body>
        <Card.Title>
          <u>{weekly[Math.floor(Math.random() * 12)].tableTopics}</u>
        </Card.Title>
        <Card.Subtitle>
          {weekly[Math.floor(Math.random() * 12)].quoteDay}
        </Card.Subtitle>
        {/* <Card.Text>{props.time}3</Card.Text>
        <Card.Text>{props.text}4</Card.Text> */}
      </Card.Body>
    </Card>

    // </Col>
    // </Row>

    // </Container>
  );
};

export default FeatureCard;
