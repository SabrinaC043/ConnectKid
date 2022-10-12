import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const FeatureCard = (props) => {
    return(

    <Card style={{ width: "18rem"}} className="text-center">
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