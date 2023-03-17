import React from 'react';
import { useSelector } from 'react-redux';
import { getEndDate } from 'redux/planning/planningSelectors';
import { getBooksStatistics } from 'redux/planning/planningSelectors';
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

const MyPurposeToRead = () => {
  const endDate = new Date(useSelector(getEndDate)).getTime();
  const startData = Date.now();
  const days = Math.floor((endDate - startData) / (1000 * 60 * 60 * 24));
  const books = useSelector(getBooksStatistics).length;

  return (
    <WrapperBox>
      <MainWrapper>
        <HeaderWrapper>
          <HeadText>Моя мета прочитати</HeadText>
        </HeaderWrapper>
        <Row>
          <Column>
            <AmountValueWrapper>
              <AmountValue>{books}</AmountValue>
            </AmountValueWrapper>
            <Description>Кількість книжок</Description>
          </Column>
          <Column>
            <AmountValueWrapper>
              <AmountValue>{endDate > 0 ? days : '0'}</AmountValue>
            </AmountValueWrapper>
            <Description>Кількість днів</Description>
          </Column>
        </Row>
      </MainWrapper>
    </WrapperBox>
  );
};

export default MyPurposeToRead;
