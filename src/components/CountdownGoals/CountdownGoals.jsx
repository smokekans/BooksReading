import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';

import {
  TimerStl,
  LaybelStl,
  TimeStl,
  СolonStl,
  TitleStl,
} from './CountdownGoals.styled';
import { getEndDate } from 'redux/planning/planningSelectors';
import { useCountDown } from 'hooks/useCountDown';
import { ModalFasterRead } from '../Modal/ModalFasterRead/ModalFasterRead';

export const CountdownGoals = () => {
  const endDateGoals = new Date(useSelector(getEndDate)).getTime();
  const { days, hours, minutes, seconds } = useCountDown(endDateGoals);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const formik = useFormik({
    initialValues: {
      days: '',
      hours: '',
      minutes: '',
      seconds: '',
    },
    onSubmit: ({ days, hours, minutes, seconds }) => {
      if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
        setIsModalOpen(true);
      }
      formik.resetForm();
    },
  });

  const closeModalFaster = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <TitleStl>Goals countdown</TitleStl>
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
      {isModalOpen && <ModalFasterRead onClose={closeModalFaster} />}
    </div>
  );
};
