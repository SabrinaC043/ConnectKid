import React from 'react';
import Sidebar from '../components/Sidebar/index';
import FeatureCard from '../components/cards/featureCard';
import BasicCard from '../components/cards/card';
import { useQuery } from "@apollo/client";
import { ALL_EVENTS } from '../utils/apollo/queries';
import {Row, Col, Container, Card} from 'react-bootstrap'


export default function Events({eventCards, featuredCard}) {


const { loading, err, data } = useQuery(ALL_EVENTS);

  if (loading) {
    return(<p>Loading</p>)
  }

  if (err) {
    return(<p>Err</p>)
  }

  if ( data ) {

const firstFeaturedIndex = data.events.map(event => event.isFeatured).indexOf(true);

const firstFeaturedItem = data.events[firstFeaturedIndex];




// console.log(firstFeatured);
  

  return (
    <>
      {/* <Sidebar /> */}

      <Row>

        <Col xs={12} md={6}>

          <FeatureCard
            title={firstFeaturedItem.name}
            date={firstFeaturedItem.date}
            text="This is our first featured event!"
            // locatio needs to be added

            />

        </Col>


      </Row>

      {data.events.map( function(currentEvent, index) {
        console.log(currentEvent);
        if ( index === firstFeaturedIndex) {
          <></>;
        } else {
          console.log('in here');
          return(
          <Col xs={6} md={4} key={index}>
            <BasicCard
              title={currentEvent.name}
              date={currentEvent.date}
              />
          </Col>)
        }

      })}
      

      {/* <Row>
      <FeatureCard
        title={featuredCard.title}
        date={featuredCard.date}
        time={featuredCard.time}
        text={featuredCard.text}
      />
      </Row>
      {eventCards.map((card, i) => (
        <BasicCard key={i}
          title={card.title}
          date={card.date}
          time={card.time}
          text={card.text}
          />
      ))} */}
    </>
  );
    }
}
