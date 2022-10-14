import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const BasicCard = (props) => {
  return (
    <Card style={{ width: "18rem" }}>
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Subtitle>{props.date}</Card.Subtitle>
      <Card.Text>{props.time}</Card.Text>
      <Card.Text>{props.location}</Card.Text>
    </Card.Body>
    </Card>
  );
};

export default BasicCard;
