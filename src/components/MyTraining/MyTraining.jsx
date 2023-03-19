import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addTrainingConfig } from 'redux/planning/planningOperations';

import {MainTitle, MainTitleContainer, BeginTrainingBtn} from './MyTraining.styled';

import { Calendars } from './Calendar/Calendar';
import { BooksCustomSelector } from './BooksSelector/BooksSelector';
import { TableComponent } from './Table/Table';

export const MyTraining = () => {
  const stateBody = useSelector(state => state.planning);
  const filter = useSelector(state => state.planning.filter);
  const dispatch = useDispatch();
  const handleBeginTrainingBtn = () => {
    dispatch(addTrainingConfig(stateBody));
  };
  
  //Розмітка
  return (
    <>
      <div>
      <MainTitleContainer>
        <MainTitle>Моє тренування</MainTitle>
      </MainTitleContainer>
      <Calendars/>
     <BooksCustomSelector/>
      <TableComponent/>
        <Link
          style={{position: 'absolute', left: '50%', transform: 'translateX(-100%)'}}
        to="/statistics">
        {filter.length > 0 ? <BeginTrainingBtn onClick={handleBeginTrainingBtn} type="button">
          Почати тренування
        </BeginTrainingBtn>: ''}
        </Link>
        </div>
    </>
  );
};
