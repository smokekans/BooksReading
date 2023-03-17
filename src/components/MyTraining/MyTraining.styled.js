import styled from 'styled-components';
import calendarImg from '../../images/calendar.png'
export const MainTitleContainer = styled.div`
display: flex;
justify-content: center;
max-width: 928px;
height: 60px;
background-color: #B1B5C2;
box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
margin-bottom: 24px;
`

export const MainTitle = styled.h2`
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 24px;
color: #FFFFFF
`
export const CalendarContainer = styled.div`
display: flex;
justify-content: center;
max-width: 928px;
margin-bottom: 24px;
`
export const Calendar = styled.div`
display: flex;
align-items: center;
width: 250px;
height: 42px;
border: solid 1px #A6ABB9;
margin: 0;
padding-left: 45px;
background-image: url(${calendarImg});
background-repeat: no-repeat;
background-size: 17px 17px;
background-position: 5% 50%;
margin-right: 44px;
`
export const CalendarStartText = styled.p`
font-weight: 500;
font-size: 14px;
line-height: 38px;
color: #A6ABB9;
margin-right: 118px;
`
export const CalendarEndText = styled.p`
font-weight: 500;
font-size: 14px;
line-height: 38px;
color: #A6ABB9;
margin-right: 86px;
`
export const BooksContainer = styled.div`
display: flex;
margin-bottom: 23px;
position: relative;

`

export const BooksSelector = styled.div`
padding-top: 12px;
width: 715px;
height: 42px;
background-color: #FFFFFF;
box-shadow: inset 0px 1px 2px rgba(29, 29, 27, 0.15);
border: none;
margin-right: 32px;
:hover,
:focus{
    border: 1px solid #B1B5C2;
    cursor: pointer;
}
`
export const SelectorText = styled.p`
margin: 0;
`
export const SelectorArrow = styled.svg`
position: absolute;
top: 50%;
left: 45%;
`
export const SelectorItemContainer = styled.div`
top: 99%;
position: absolute;
width: inherit;
background-color: #fff;
max-height: 200px;
overflow-y: auto;

`
export const SelectorItem = styled.p`
margin: 0;
padding: 10px;
:hover,
:focus{
    background-color: #B1B5C2;
}

`

export const Button = styled.button`
font-weight: 500;
font-size: 14px;
line-height: 17px;
color: #000000;
width: 181px;
  height: 42px;
  background-color: #f6f7fb;
  border: 1px solid #242a37;
  :hover {
    border: 1px solid #F25137;
  }
`

export const BeginTrainingBtn = styled.button`
font-weight: 600;
font-size: 16px;
line-height: 20px;
text-align: center;
color: #FFFFFF;
background-color: #FF6B08;
width: 200px;
height: 40px;
border: none;
`