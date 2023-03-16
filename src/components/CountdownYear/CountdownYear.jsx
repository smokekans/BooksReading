import React from 'react';
import { useState, useRef, useEffect } from 'react';
import {
  TimerStl,
  LaybelStl,
  TimeStl,
  СolonStl,
  TitleStl,
} from './CountdownYear.styled';

const endDateYear = new Date('December 31, 2023 23:59:59').getTime();

export const CountdownYears = () => {
  const [startData, setStartData] = useState(Date.now());

  let interval = useRef();

  const formatDistance = () => {
    const distance = endDateYear - startData;

    const daysMath = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hoursMath = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutesMath = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const secondsMath = Math.floor((distance % (1000 * 60)) / 1000);

    if (distance < 0) {
      clearInterval(interval.current);
    } else {
      const days = String(daysMath).padStart(2, '0');
      const hours = String(hoursMath).padStart(2, '0');
      const minutes = String(minutesMath).padStart(2, '0');
      const seconds = String(secondsMath).padStart(2, '0');
      return { days, hours, minutes, seconds };
    }
  };

  const startTimer = () => {
  
    interval = setInterval(() => {
       setStartData(Date.now());
    }, 1000);
  };

  useEffect(() => {
    const clearTimer = interval.current;
    startTimer();
    return () => {
      clearInterval(clearTimer);
    };
  });
  const { days, hours, minutes, seconds } = formatDistance();
  return (
    <div>
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
    </div>
  );
};
