import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const BasicCard = (props) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{props.title}1</Card.Title>
        <Card.Subtitle>{props.date}2</Card.Subtitle>
        <Card.Text>{props.time}3</Card.Text>
        <Card.Text>{props.location}4</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default BasicCard;
