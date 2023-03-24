import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addTrainingConfig } from 'redux/planning/planningOperations';
import {
  MainTitle,
  MainTitleContainer,
  BeginTrainingBtn,
  BeginTrainingBtnContainer,
} from './MyTraining.styled';
import { Calendars } from './Calendar/Calendar';
import { BooksCustomSelector } from './BooksSelector/BooksSelector';
import { TableComponent } from './Table/Table';
import { langMyTraining } from 'languages/langMyTraining';
import { getLanguage } from 'redux/language/languageSelectors';
import {
  getStartDate,
  getEndDate,
} from '../../redux/planning/planningSelectors';
import { deleteBooks, updateStats } from 'redux/planning/planningSlice';

export const MyTraining = () => {
  const start = useSelector(getStartDate);
  const end = useSelector(getEndDate);
  const stateBody = useSelector(state => state.planning);
  const filter = useSelector(state => state.planning.filter);
  const dispatch = useDispatch();
  const lang = useSelector(getLanguage);

  const { training, startTraining } = langMyTraining;

  const handleBeginTrainingBtn = () => {
    dispatch(updateStats());
    dispatch(addTrainingConfig(stateBody));
    dispatch(deleteBooks());
  };
  console.log(start);
  console.log(end);
  return (
    <>
      <div>
        <MainTitleContainer>
          <MainTitle>{training[lang]}</MainTitle>
        </MainTitleContainer>
        <Calendars />
        <BooksCustomSelector />
        <TableComponent />
        <BeginTrainingBtnContainer>
          <Link to="/statistics">
            {!start.includes(1970) &&
            filter.length > 0 &&
            !end.includes(1970) ? (
              <BeginTrainingBtn onClick={handleBeginTrainingBtn} type="button">
                {startTraining[lang]}
              </BeginTrainingBtn>
            ) : (
              ''
            )}
          </Link>
        </BeginTrainingBtnContainer>
      </div>
    </>
  );
};
