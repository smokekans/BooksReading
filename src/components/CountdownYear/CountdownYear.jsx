import React from 'react';
import {
  TimerStl,
  LaybelStl,
  TimeStl,
  СolonStl,
  TitleStl,
  Container
} from './CountdownYear.styled';
import { useCountDown } from 'hooks/useCountDown';

const endDateYear = new Date('December 31, 2023 23:59:59').getTime();

export const CountdownYears = () => {
  const { days, hours, minutes, seconds } = useCountDown(endDateYear);

  return (
    <Container>
      <TitleStl>Years countdown</TitleStl>
      <TimerStl>
        <section>
          <TimeStl>{days}</TimeStl>
          <LaybelStl>DAYS</LaybelStl>
        </section>
        <СolonStl>:</СolonStl>
        <section>
          <TimeStl>{hours}</TimeStl>
          <LaybelStl>HRS</LaybelStl>
        </section>
        <СolonStl>:</СolonStl>
        <section>
          <TimeStl>{minutes}</TimeStl>
          <LaybelStl>MINS</LaybelStl>
        </section>
        <СolonStl>:</СolonStl>
        <section>
          <TimeStl>{seconds}</TimeStl>
          <LaybelStl>SECS</LaybelStl>
        </section>
      </TimerStl>
    </Container>
  );
};
