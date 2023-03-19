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
import { Button, BooksSelector, Calendar, CalendarContainer, CalendarEndText,  CalendarStartText,  MainTitle, MainTitleContainer, BeginTrainingBtn, BooksContainer, SelectorText, SelectorArrow, SelectorItem, SelectorItemContainer, TableHeaderItem, Table, TableDecoration, TableBodyItem, TableHeader } from './MyTraining.styled';
import { ReactComponent as BookIcon } from '../LibraryTable/svg/bookIconGrey.svg'
import {ReactComponent as DeleteIcon} from './svg/delete.svg'

export const MyTraining = () => {
  const state = useSelector(state => state.book.book.goingToRead);
  const stateBody = useSelector(state => state.planning);
  const filter = useSelector(state => state.planning.filter);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [id, setId] = useState(null);
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
      {value} {startDate ? '':<CalendarStartText>Початок</CalendarStartText>}
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
      {value} {endDate ? '':<CalendarEndText>Завершення</CalendarEndText>}
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
          customInput={<End />}
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
      
      <Table>
        <TableHeader>
            <TableHeaderItem>Назва книги</TableHeaderItem>
            <TableHeaderItem>Автор</TableHeaderItem>
            <TableHeaderItem>Рік</TableHeaderItem>
            <TableHeaderItem>Стор.</TableHeaderItem>
        </TableHeader>
        <tbody>
          {filter.map(({ _id, title, author, publishYear, pagesTotal }) => {
            return (
              <tr key={_id} id={_id}>
                <TableBodyItem>
                
                  <BookIcon/>
                  {title}
                 
                  </TableBodyItem>
                <TableBodyItem>{author}</TableBodyItem>
                <TableBodyItem>{publishYear}</TableBodyItem>
                <TableBodyItem>{pagesTotal}</TableBodyItem>
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
            <td><BookIcon/>...</td>
          </tr>
        </tbody>
      </Table>
      <Link to="/statistics">
        {filter.length > 0 ? <BeginTrainingBtn onClick={handleBeginTrainingBtn} type="button">
          Почати тренування
        </BeginTrainingBtn>: ''}
      </Link>
    </>
  );
};
