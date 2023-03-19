import React, { forwardRef, useEffect, useState } from "react";
import { addEndDate, addStartDate } from "redux/planning/planningSlice";
import { useDispatch, useSelector } from "react-redux";
import { Calendar, CalendarContainer, CalendarEndText, CalendarStartText } from "../MyTraining.styled";
import DatePicker from "react-datepicker";
import { langMyTraining } from "languages/langMyTraining"; 
import "react-datepicker/dist/react-datepicker.css";
import { getLanguage } from "redux/language/languageSelectors";



export const Calendars = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const lang = useSelector(getLanguage);
    const dispatch = useDispatch();
    const {start, finish} = langMyTraining
    
    



    useEffect(() => {
    const formattedDate = date => {
      const incomeDate = new Date(date);
      const year = incomeDate.getFullYear();
      let month = incomeDate.getMonth() + 1;
      if (month < 10) {
        month = '0' + month;
      }
      const day = incomeDate.getDate();
      return year + '-' + month + '-' + day;
    };
    dispatch(addStartDate(formattedDate(startDate)));
    dispatch(addEndDate(formattedDate(endDate)));
    }, [dispatch, endDate, startDate]);

    // стилі для бібліотеки dataPiker
  const Start = forwardRef(({ value, onClick }, ref) => (
    <Calendar onClick={onClick} ref={ref}>
      {value} {startDate ? '':<CalendarStartText>{start[lang]}</CalendarStartText>}
      <svg
        width="13"
        height="6"
        viewBox="0 0 13 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M6.5 6L0.870834 0.750001L12.1292 0.75L6.5 6Z" fill="#242A37" />
      </svg>
    </Calendar>
  ));

  const End = forwardRef(({ value, onClick }, ref) => (
    <Calendar onClick={onClick} ref={ref}>
      {value} {endDate ? '':<CalendarEndText>{finish[lang]}</CalendarEndText>}
      <svg
        width="13"
        height="6"
        viewBox="0 0 13 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M6.5 6L0.870834 0.750001L12.1292 0.75L6.5 6Z" fill="#242A37" />
      </svg>
    </Calendar>
  ));
    return (
        <>
        <CalendarContainer>
        <DatePicker
          selected={startDate}
          onChange={date => setStartDate(date)}
          dateFormat="dd.MM.yyyy"
          customInput={<Start />}
        />
        <DatePicker
          selected={endDate}
          onChange={date => setEndDate(date)}
          dateFormat="dd.MM.yyyy"
          customInput={<End />}
        />
      </CalendarContainer>
        </>
    )
}