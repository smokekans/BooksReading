import React from 'react';
import { useSelector } from 'react-redux';
import { getEndDate } from 'redux/planning/planningSelectors';
import { getBooksStatistics } from 'redux/planning/planningSelectors';
import {
  TitleStl,
  WrapStl,
  WraperStl,
  ListStl,
  СolonStl,
  LabelStl,
  BoxStl,
  AccentStl,
} from './MyGoals.styled';

export const MyGoals = () => {
  const endDate = new Date(useSelector(getEndDate)).getTime();
  const startData = Date.now();
  

  const days = Math.floor(((endDate - startData) / (1000 * 60 * 60 * 24)) % 30);

  const books = useSelector(getBooksStatistics).length - 1;

//   const bookLeft = () => {

//   };

  return (
    <section>
      <WrapStl>
        <TitleStl>My goals</TitleStl>
      </WrapStl>
      <WraperStl>
        <ListStl>
          <li>
            <BoxStl>
              <СolonStl>{books}</СolonStl>
            </BoxStl>
            <LabelStl>Amount of books</LabelStl>
          </li>
          <li>
            <BoxStl>
              <СolonStl>{days}</СolonStl>
            </BoxStl>
            <LabelStl>Amount of days</LabelStl>
          </li>
          <li>
            <BoxStl>
              <AccentStl>00</AccentStl>
            </BoxStl>
            <LabelStl>Books left</LabelStl>
          </li>
        </ListStl>
      </WraperStl>
    </section>
  );
};
