import React from 'react';
import { useSelector } from 'react-redux';
import {
  TimerStl,
  LaybelStl,
  TimeStl,
  СolonStl,
  TitleStl,
  Container
} from './CountdownYear.styled';
import { useCountDown } from 'hooks/useCountDown';
import { getLanguage } from 'redux/language/languageSelectors';
import { langCountdownGoals } from 'languages/langCountdownGoals';

const endDateYear = new Date('December 31, 2023 23:59:59').getTime();

export const CountdownYears = () => {
  const { days, hours, minutes, seconds } = useCountDown(endDateYear);
const lang = useSelector(getLanguage);
  const { countdown, day, hour, min, sec} = langCountdownGoals;
  
  return (
    <Container>
      <TitleStl>{countdown[lang]}</TitleStl>
      <TimerStl>
        <section>
          <TimeStl>{days}</TimeStl>
          <LaybelStl>{day[lang]}</LaybelStl>
        </section>
        <СolonStl>:</СolonStl>
        <section>
          <TimeStl>{hours}</TimeStl>
          <LaybelStl>{hour[lang]}</LaybelStl>
        </section>
        <СolonStl>:</СolonStl>
        <section>
          <TimeStl>{minutes}</TimeStl>
          <LaybelStl>{min[lang]}</LaybelStl>
        </section>
        <СolonStl>:</СolonStl>
        <section>
          <TimeStl>{seconds}</TimeStl>
          <LaybelStl>{sec[lang]}</LaybelStl>
        </section>
      </TimerStl>
    </Container>
  );
};
