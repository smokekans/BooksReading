import React from 'react';
import { TimerStl, LaybelStl, TimeStl, СolonStl, TitleStl } from './CountdownYear.styled';

export const CountdounYears = () => {
  return (
    <div>
        <TitleStl>Years countdown</TitleStl>
      <TimerStl>
        
        <section >
          <TimeStl>00</TimeStl>
          <LaybelStl>DAYS</LaybelStl>
        </section>
        <СolonStl>:</СolonStl>
        <section >
          <TimeStl>00</TimeStl>
          <LaybelStl>HRS</LaybelStl>
        </section>
        <СolonStl>:</СolonStl>
        <section >
          <TimeStl>00</TimeStl>
          <LaybelStl>MINS</LaybelStl>
        </section>
        <СolonStl>:</СolonStl>
        <section >
          <TimeStl>00</TimeStl>
          <LaybelStl>SECS</LaybelStl>
        </section>
    
      </TimerStl>

    </div>
  );
};
