import React from "react";
import Sidebar from "../components/Sidebar/index";
import FeatureCard from "../components/cards/featureCard";
import BasicCard from "../components/cards/card";
import { useQuery } from "@apollo/client";
import { ALL_EVENTS } from "../utils/apollo/queries";
import { Row, Col, Container, Card } from "react-bootstrap";

export default function Events({ eventCards, featuredCard }) {
  const { loading, err, data } = useQuery(ALL_EVENTS);
  const events = data?.events || [];
  //  events is array of events
  if (loading) {
    return <p>Loading</p>;
  }

  if (err) {
    return <p>Err</p>;
  }
  console.log(events);

  const firstFeaturedIndex = events
    .map((event) => event.isFeatured)
    .indexOf(true);

  const firstFeaturedItem = events[firstFeaturedIndex];
  // console.log(firstFeaturedIndex);
  const eventsWithoutFeatured = events.filter(
    (e, i) => i !== firstFeaturedIndex
  );

  return (
    <>
      <Sidebar />

      <Container>
        <Row>
          <Col xs={12} md={4} className="mx-auto">
            <FeatureCard
              title={firstFeaturedItem.name}
              date={firstFeaturedItem.date}
              text="This is our first featured event!"
              // locatio needs to be added
            />
          </Col>
        </Row>

        <Row>
          {eventsWithoutFeatured.map((currentEvent, index) => (
            <Col xs={6} md={4} key={index}>
              <BasicCard
                title={currentEvent.name}
                date={currentEvent.date}
                location={currentEvent.location}
              />
            </Col>
          ))}
        </Row>

        {/* <Row>
      <FeatureCard
        title={featuredCard.title}
        date={featuredCard.date}
        time={featuredCard.time}
        text={featuredCard.text}
      />
      </Row> */}
        {/* {eventCards.map((card, i) => (
        <BasicCard key={i}
          title={card.title}
          date={card.date}
          time={card.time}
          text={card.text}
          />
      ))} */}
      </Container>
    </>
  );
}
