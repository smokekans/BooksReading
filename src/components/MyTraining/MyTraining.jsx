
import React, { forwardRef, useState } from 'react';
import { useEffect } from 'react';
import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addTrainingConfig } from 'redux/planning/planningOperations';
import {
  addEndDate,
  addStartDate,
  addToBooks,
  deleteBook,
  filteredBooksList,
} from 'redux/planning/planningSlice';
import { Button, BooksSelector, Calendar, CalendarContainer, CalendarEndText,  CalendarStartText,  MainTitle, MainTitleContainer, BeginTrainingBtn, BooksContainer, SelectorText, SelectorArrow, SelectorItem, SelectorItemContainer } from './MyTraining.styled';


export const MyTraining = () => {
  const state = useSelector(state => state.book.book.goingToRead);
  const stateBody = useSelector(state => state.planning);
  const filter = useSelector(state => state.planning.filter);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [id, setId] = useState('');
  const [list, setList] = useState(false)
  const dispatch = useDispatch();
  const filterId = filter.map(filterBook => filterBook._id);

  // форматування дати та запис у стан
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

  // зчитування id з селектору
  const handleReadId = e => {
    setList(!list)
    setId(e.target.id);
  };

  // функція-слухач кліку на кнопці Додати, перевірка на відсутність однакових книжок у списку
  const handleAddBtn = e => {
    dispatch(addToBooks(id));
    if (filterId?.toString() === id?.toString()) {
      return;
    }
    state.forEach(book => {
      if (book._id === id) {
        dispatch(filteredBooksList(book));
      }
    });
  };

  // відправка інформації на сервер при кліку на кнопку тренування
  const handleBeginTrainingBtn = () => {
    dispatch(addTrainingConfig(stateBody));
  };

  // видалення книжки
  const handleDeleteBook = e => {
    const removeBook = filter.filter(book => {
      return book._id !== e.currentTarget.parentElement.id;
    });
    dispatch(deleteBook(removeBook));
  };

  // стилі для бібліотеки dataPiker
  const Start = forwardRef(({ value, onClick }, ref) => (
    <Calendar onClick={onClick} ref={ref}>
      {value} <CalendarStartText>Початок</CalendarStartText>
      <svg width="13" height="6" viewBox="0 0 13 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.5 6L0.870834 0.750001L12.1292 0.75L6.5 6Z" fill="#242A37" />
      </svg>
      </Calendar>
      
  ));

  const End = forwardRef(({ value, onClick }, ref) => (
    <Calendar onClick={onClick} ref={ref}>
      {value} <CalendarEndText>Завершення</CalendarEndText>
      <svg width="13" height="6" viewBox="0 0 13 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.5 6L0.870834 0.750001L12.1292 0.75L6.5 6Z" fill="#242A37" />
      </svg>
      </Calendar>
     
  ));

  //Розмітка
  return (
    <>
      <MainTitleContainer>
        <MainTitle>Моє тренування</MainTitle>
      </MainTitleContainer>
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
          customInput={<End/>}
      />
      </CalendarContainer>
      <BooksContainer>
        <BooksSelector onClick={handleReadId}>
          <SelectorText>Обрати книги з бібліотеки</SelectorText>
          {list ?<SelectorItemContainer>
            {state.map(({ _id, title }) => {
              return (
                <SelectorItem key={_id} id={_id}>
                  {title}
                </SelectorItem>
              );
            })} 
            </SelectorItemContainer>:''}
        <SelectorArrow width="13" height="6" viewBox="0 0 13 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.5 6L0.870834 0.750001L12.1292 0.75L6.5 6Z" fill="#242A37" />
      </SelectorArrow>
        </BooksSelector>
      <Button onClick={handleAddBtn} type="button">
        Додати
        </Button>
        </BooksContainer>
      <table>
        <thead>
          <tr>
            <th>Назва книги</th>
            <th>Автор</th>
            <th>Рік</th>
            <th>Стор.</th>
          </tr>
        </thead>
        <tbody>
          {filter.map(({ _id, title, author, publishYear, pagesTotal }) => {
            return (
              <tr key={_id} id={_id}>
                <td><svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 0.5C18.89 0.15 17.67 0 16.5 0C14.55 0 12.45 0.4 11 1.5C9.55 0.4 7.45 0 5.5 0C3.55 0 1.45 0.4 0 1.5V16.15C0 16.4 0.25 16.65 0.5 16.65C0.6 16.65 0.65 16.6 0.75 16.6C2.1 15.95 4.05 15.5 5.5 15.5C7.45 15.5 9.55 15.9 11 17C12.35 16.15 14.8 15.5 16.5 15.5C18.15 15.5 19.85 15.8 21.25 16.55C21.35 16.6 21.4 16.6 21.5 16.6C21.75 16.6 22 16.35 22 16.1V1.5C21.4 1.05 20.75 0.75 20 0.5ZM20 14C18.9 13.65 17.7 13.5 16.5 13.5C14.8 13.5 12.35 14.15 11 15V3.5C12.35 2.65 14.8 2 16.5 2C17.7 2 18.9 2.15 20 2.5V14Z" fill="#A6ABB9" />
                  <path d="M16.5 6C17.38 6 18.23 6.09 19 6.26V4.74C18.21 4.59 17.36 4.5 16.5 4.5C14.8 4.5 13.26 4.79 12 5.33V6.99C13.13 6.35 14.7 6 16.5 6Z" fill="#A6ABB9" />
                  <path d="M12 7.99016V9.65016C13.13 9.01016 14.7 8.66016 16.5 8.66016C17.38 8.66016 18.23 8.75016 19 8.92016V7.40016C18.21 7.25016 17.36 7.16016 16.5 7.16016C14.8 7.16016 13.26 7.46016 12 7.99016Z" fill="#A6ABB9" />
                  <path d="M16.5 9.83008C14.8 9.83008 13.26 10.1201 12 10.6601V12.3201C13.13 11.6801 14.7 11.3301 16.5 11.3301C17.38 11.3301 18.23 11.4201 19 11.5901V10.0701C18.21 9.91008 17.36 9.83008 16.5 9.83008Z" fill="#A6ABB9" />
                </svg>
                </td>
                <td>{title}</td>
                <td>{author}</td>
                <td>{publishYear}</td>
                <td>{pagesTotal}</td>
                <td onClick={handleDeleteBook}>
                  <svg
                    width="14"
                    height="18"
                    viewBox="0 0 14 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 6V16H3V6H11ZM9.5 0H4.5L3.5 1H0V3H14V1H10.5L9.5 0ZM13 4H1V16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4Z"
                      fill="#A6ABB9"
                    />
                  </svg>
                </td>
              </tr>
            );
          })}
          <tr>
            <td><svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 0.5C18.89 0.15 17.67 0 16.5 0C14.55 0 12.45 0.4 11 1.5C9.55 0.4 7.45 0 5.5 0C3.55 0 1.45 0.4 0 1.5V16.15C0 16.4 0.25 16.65 0.5 16.65C0.6 16.65 0.65 16.6 0.75 16.6C2.1 15.95 4.05 15.5 5.5 15.5C7.45 15.5 9.55 15.9 11 17C12.35 16.15 14.8 15.5 16.5 15.5C18.15 15.5 19.85 15.8 21.25 16.55C21.35 16.6 21.4 16.6 21.5 16.6C21.75 16.6 22 16.35 22 16.1V1.5C21.4 1.05 20.75 0.75 20 0.5ZM20 14C18.9 13.65 17.7 13.5 16.5 13.5C14.8 13.5 12.35 14.15 11 15V3.5C12.35 2.65 14.8 2 16.5 2C17.7 2 18.9 2.15 20 2.5V14Z" fill="#A6ABB9" />
                  <path d="M16.5 6C17.38 6 18.23 6.09 19 6.26V4.74C18.21 4.59 17.36 4.5 16.5 4.5C14.8 4.5 13.26 4.79 12 5.33V6.99C13.13 6.35 14.7 6 16.5 6Z" fill="#A6ABB9" />
                  <path d="M12 7.99016V9.65016C13.13 9.01016 14.7 8.66016 16.5 8.66016C17.38 8.66016 18.23 8.75016 19 8.92016V7.40016C18.21 7.25016 17.36 7.16016 16.5 7.16016C14.8 7.16016 13.26 7.46016 12 7.99016Z" fill="#A6ABB9" />
                  <path d="M16.5 9.83008C14.8 9.83008 13.26 10.1201 12 10.6601V12.3201C13.13 11.6801 14.7 11.3301 16.5 11.3301C17.38 11.3301 18.23 11.4201 19 11.5901V10.0701C18.21 9.91008 17.36 9.83008 16.5 9.83008Z" fill="#A6ABB9" />
                </svg>...</td>
          </tr>
        </tbody>
      </table>
      <Link to="/statistics">
        {filter.length > 0 ? <BeginTrainingBtn onClick={handleBeginTrainingBtn} type="button">
          Почати тренування
        </BeginTrainingBtn>: ''}
      </Link>
    </>
  );
};
