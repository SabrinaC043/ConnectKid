import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";

const FeatureCard = (props) => {
    return(

    <Card className="text-center col-9 border" style={{marginTop: "200px"}}>
    <Card.Body>
        <Card.Title><u>{props.title}</u></Card.Title>
        <Card.Subtitle>{props.date}</Card.Subtitle>
        <Card.Text>{props.time}</Card.Text>

        <Card.Text>{props.text}</Card.Text>
 
    </Card.Body>
    </Card>

    )

}

export default FeatureCard