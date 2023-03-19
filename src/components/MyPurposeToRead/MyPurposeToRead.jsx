import React from 'react';
import { useSelector } from 'react-redux';
import { getEndDate, getPlanBooks } from 'redux/planning/planningSelectors';
import {
  MainWrapper,
  HeaderWrapper,
  HeadText,
  AmountValueWrapper,
  AmountValue,
  WrapperBox,
  Description,
  Row,
  Column,
} from './MyPurposeToRead.styled';
import { getLanguage } from 'redux/language/languageSelectors';
import { langMyGoals } from 'languages/langMyGoals';

const MyPurposeToRead = () => {
  const endDate = new Date(useSelector(getEndDate)).getTime();
  const startData = Date.now();
  const booksAll = useSelector(getPlanBooks);
  const lang = useSelector(getLanguage);
  const { goal, bookaAm, daysAm } = langMyGoals;

  const days = Math.floor((endDate - startData) / (1000 * 60 * 60 * 24));

  const books = booksAll.length;

  return (
    <WrapperBox>
      <MainWrapper>
        <HeaderWrapper>
          <HeadText>{goal[lang]}</HeadText>
        </HeaderWrapper>
        <Row>
          <Column>
            <AmountValueWrapper>
              <AmountValue>{books}</AmountValue>
            </AmountValueWrapper>
            <Description>{bookaAm[lang]}</Description>
          </Column>
          <Column>
            <AmountValueWrapper>
              <AmountValue>{endDate > 0 ? days : '0'}</AmountValue>
            </AmountValueWrapper>
            <Description>{daysAm[lang]}</Description>
          </Column>
        </Row>
      </MainWrapper>
    </WrapperBox>
  );
};

export default MyPurposeToRead;
