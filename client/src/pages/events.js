import React from 'react';
import Sidebar from '../components/Sidebar/index';
import FeatureCard from '../components/cards/featureCard';
import BasicCard from '../components/cards/card';

export default function Events({eventCards, featuredCard}) {

  return (
    <>
      <Sidebar />
      <FeatureCard
        title={featuredCard.title}
        date={featuredCard.date}
        time={featuredCard.time}
        text={featuredCard.text}
      />
      {eventCards.map((card, i) => (
        <BasicCard key={i}
          title={card.title}
          date={card.date}
          time={card.time}
          text={card.text}
          />
      ))}
    </>
  );
}