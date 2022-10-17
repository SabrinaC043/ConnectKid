import React from "react";
import Sidebar from "../components/Sidebar/index";
import FeatureCard from "../components/cards/featureCard";
import BasicCard from "../components/cards/card";
import { useQuery } from "@apollo/client";
import { ALL_EVENTS } from "../utils/apollo/queries";
import { Row, Col, Container, Card } from "react-bootstrap"; 
import eventImage from "../assets/images/event.jpg"; 
import Stack from "react-bootstrap/Stack";



export default function Events({ eventCards, featuredCard }) { 
  const { loading, err, data } = useQuery(ALL_EVENTS);
  const events = data?.events || []; 
  const backgroundLayout = { 
    backgroundImage: `url(${eventImage})`, 
    height: "max-content", 
    paddingBottom: "200px", 
  }; 
  return ( 
    <Container fluid className="text-center" style={backgroundLayout}> 
     <Row className="align-items-center" style={{ paddingTop: "100 px" }}> 
    <Col>
    <Stack gap={1}> 
    <div 
    xs={12} 
    md={5} 
    style={{minHeight: "200px", minWidth:"100px"}} 
    > 
    <Card style={{minHeight:"200px", minWidth:"200px"}}> 
    <featureCard /> 
    </Card> 
    </div> 
    <div> 
      <Card style={{minHeight: "200px", minWidth:"200px"}}> 
      <BasicCard /> 
      </Card> 
      </div> 
      </Stack> 
        </Col> 
        <Col xs={12} md={5} style={{minHeight: "100px", minWidth: "100px"}}> 
        <Card style={{minHeight:"400px", minWidth: "200px"}}> 
        <BasicCard /> 
        </Card> 
        </Col> 
        </Row> 
        </Container> 
        ); 
        } 
  

  
  //  events is array of events
 //if (loading) {
  //  return <p>Loading</p>;
  //} 
  

  //if (err) {
    //return <p>Err</p>;
  //}  
  //console.log(events);

  //const firstFeaturedIndex = events
    //.map((event) => event.isFeatured)
    //.indexOf(true);


  //const firstFeaturedItem = data.events[firstFeaturedIndex];
  //console.log(firstFeaturedIndex);
  //const eventsWithoutFeatured = data.events.filter(
   // (e, i) => i !== firstFeaturedIndex
 // );

  