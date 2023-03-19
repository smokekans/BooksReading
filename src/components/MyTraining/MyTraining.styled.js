import styled from 'styled-components';
import calendarImg from '../../images/calendar.png';

export const MyTrainingContainer = styled.div`
min-width: 320px;
 @media screen and (min-width: 1280px) {
width: 928px;
position: relative;
  }

`

export const MainTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 928px;
  height: 60px;
  background-color: #b1b5c2;
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
  margin-bottom: 24px;
`;

export const MainTitle = styled.h2`
  font-weight: 600;
  font-size: 20px;
  line-height: calc(24/20);
  color: #ffffff;
  
`;

export const CalendarContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
max-width: 928px;
margin-bottom: 20px;
@media screen and (min-width: 768px) {
  flex-direction: row;
  max-width: 704px;
}
@media screen and (min-width: 1280px) {
justify-content: center;
max-width: 928px;
margin-bottom: 24px;
  }
`
export const Calendar = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 92vw;
height: 42px;
border: solid 1px #A6ABB9;
margin: 0;
margin-bottom: 20px;
padding-left: 45px;
background-image: url(${calendarImg});
background-repeat: no-repeat;
background-size: 17px 17px;
background-position: 5% 50%;
padding: 12px;
padding-left: 45px;
:hover{
  cursor: pointer;
}
@media screen and (min-width: 768px) {
  width: 250px;
  margin-right: 40px;
}
@media screen and (min-width: 1280px){
margin-right: 44px;

}
`
export const CalendarStartText = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 38px;
  color: #a6abb9;
  padding: 0;
  margin: 0;
  
  @media screen and (min-width: 1280px){
  margin-right: 118px;
}
`;

export const CalendarEndText = styled.p`
font-weight: 500;
  font-size: 14px;
  line-height: 38px;
  color: #a6abb9;
  padding: 0;
  margin: 0;
  
  @media screen and (min-width: 1280px){
  margin-right: 118px;
}
`
export const BooksContainer = styled.div`
display: flex;
flex-direction: column;
@media screen and (min-width:768px){
  flex-direction: row;
margin-bottom: 23px;
position: relative;
}
@media screen and (min-width: 1280px){
margin-bottom: 23px;
}
`
export const BooksSelector = styled.div`
position: relative;
padding-top: 12px;
padding-left: 12px;
margin-bottom: 32px;
width: 100%;
height: 42px;
background-color: #FFFFFF;
box-shadow: inset 0px 1px 2px rgba(29, 29, 27, 0.15);
border: none;

:hover,
:focus{
    border: 1px solid #B1B5C2;
    cursor: pointer;
}
@media screen and (min-width: 768px){
width: 485px;
margin-right: 32px;
}
@media screen and (min-width: 1280px){
width: 715px;
margin-right: 32px;
}
`
export const SelectorText = styled.p`
font-weight: 500;
font-size: 14px;
line-height: 17px;
color: #A6ABB9;
margin: 0;
`
export const SelectorArrow = styled.svg`
position: absolute;
top: 45%;
left: 91%;
@media screen and (min-width: 768px){
left: 95%;
}
@media screen and (min-width: 1280px){
top: 50%;
left: 55%;
}
`
export const SelectorItemContainer = styled.div`
top: 244%;
left: 50%;
position: absolute;
transform: translate(-50%, -50%);
width: inherit;
background-color: #fff;
max-height: 200px;
overflow-y: auto;
@media screen and (min-width: 1280px){
top: 99%;
left: 0%;
}
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
  margin: auto;
  margin-bottom: 20px;
  background-color: #f6f7fb;
  border: 1px solid #242a37;
  :hover {
    border: 1px solid #F25137;
  }
  @media screen and (min-width:768px){
    margin: 0;
  }
`
export const BeginTrainingBtnContainer = styled.div`
max-width: 928px;
`
export const BeginTrainingBtn = styled.button`
display: block;
font-weight: 600;
font-size: 16px;
line-height: 20px;
text-align: center;
color: #FFFFFF;
background-color: #FF6B08;
width: 200px;
height: 40px;
border: none;
margin: 0 auto;
`

//table
export const Table = styled.table`
 
  
  @media screen and (min-width: 768px){
width: 100%;
background: #ffffff;
  margin-bottom: 32px;
  text-align: left;
  background: #f6f7fb;
  border-top: 1px solid #E0E5EB;
  border-bottom: 1px solid #E0E5EB;
}
 @media screen and (min-width: 1280px){
 width: 928px;
}
  
 `
export const TableHeader = styled.tr`
height: 40px;
border-bottom: 1px solid #E0E5EB;

`

export const TableHeaderItem = styled.th`
text-align: start;
font-weight: 500;
font-size: 14px;
line-height: calc(17/14);
color: #898F9F;
:first-child{
  width: 392px;
}
:nth-child(2){
  width: 230px;
}
:nth-child(3){
  width: 95px;
}
:nth-child(4){
width: 40px;
}



`
export const TableBodyItem = styled.td`
font-weight: 500;
font-size: 14px;
line-height: calc(17/14);
color: #242A37;
padding-top: 12px;
padding-bottom: 16px;
border-bottom: 1px solid #E0E5EB;
:first-child{
  display: flex;
  align-items: center;
}
:nth-child(4){
  text-align: end;
}
:nth-child(5){
  width: 134px;
  display: flex;
  justify-content: flex-end;

}
`

//MObile books training list
export const MobileBooksList = styled.ul`
margin-bottom: 32px;
`
export const MobileBooksItem = styled.li`
padding-top: 20px;
padding-bottom: 20px;
border-top: 1px solid #E0E5EB;
border-bottom: 1px solid #E0E5EB;
`
export const MobileFirstChildContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
export const MobileTextContainer = styled.div`
display: flex;
padding-left: 36px;
`
export const MobileLanguageSwitchBlocks = styled.div`
margin-right: 40px;
`
export const MobileLanguageSwitchText = styled.p`
font-weight: 500;
font-size: 12px;
line-height: calc(15/12);
color: #898F9F;
`
export const MobileBookText = styled.p`
font-weight: 500;
font-size: 12px;
line-height: calc(15/12);
color: #242A37;
`
