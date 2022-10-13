import React from 'react';
import Sidebar from '../components/Sidebar/index';
import FeatureCard from '../components/cards/featureCard';
import BasicCard from '../components/cards/cards';

export default function events() {
  
  return (
    <>
      <Sidebar />
      <FeatureCard
        title={title}
        date={date}
        time={time}
        text={text}
      />
      <Cards
        title={title}
        date={date}
        time={time}
        text={text}
      />
    </>
  );
}