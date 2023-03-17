import styled from 'styled-components';
import calendarImg from '../../images/calendar.png';
export const MainTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 928px;
  height: 60px;
  background-color: #b1b5c2;
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
  margin-bottom: 24px;
`;

export const MainTitle = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
`;

export const CalendarContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 928px;
`;

export const Calendar = styled.div`
  display: flex;
  align-items: center;
  width: 250px;
  height: 42px;
  border: solid 1px #a6abb9;
  margin: 0;
  padding-left: 45px;
  background-image: url(${calendarImg});
  background-repeat: no-repeat;
  background-size: 17px 17px;
  background-position: 5% 50%;
`;

export const CalendarStartText = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 38px;
  color: #a6abb9;
  margin-right: 118px;
`;

export const CalendarEndText = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 38px;
  color: #a6abb9;
  margin-right: 86px;
`;
