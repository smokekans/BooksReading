import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getGoingToRead,
  getCurrentlyReading,
  getFinishedReading,
} from 'redux/book/bookSelectors';
import { TitleH2, Table, Tr, TrHead, EmptyPageDiv, NavLinkMore, Container, } from './LibraryTable.styled';
import { fetchAllBooks } from 'redux/book/bookOperations';
import { ReactComponent as BookIcon } from './svg/bookIconGrey.svg';
import { ReactComponent as More } from './svg/more.svg';
import { NavLink } from 'react-router-dom';

export const LibraryTable = () => {
  const goingToRead = useSelector(getGoingToRead);
  const currentlyReading = useSelector(getCurrentlyReading);
  const finishedReading = useSelector(getFinishedReading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllBooks());
  }, [dispatch]);

  return (
    <Container>
      {finishedReading.length !== 0 && (
        <>
          <TitleH2>Прочитано</TitleH2>
          <Table>
            <thead>
              <TrHead>
                <th>Назва книги</th>
                <th>Автор</th>
                <th>Рік</th>
                <th>Стор.</th>
                <th>Рейтинг книги</th>
                <th></th>
              </TrHead>
            </thead>

            <tbody>
              {finishedReading.map(b => {
                return (
                  <Tr key={b._id}>
                    <td>
                      <BookIcon />
                      {b.title}
                    </td>
                    <td>{b.author}</td>
                    <td>{b.publishYear}</td>
                    <td>{b.pagesTotal}</td>
                    <td>
                      <span>*****</span>
                    </td>
                    <td>
                      <button type="button">Резюме</button>
                    </td>
                  </Tr>
                );
              })}
            </tbody>
          </Table>
        </>
      )}
      {currentlyReading.length !== 0 && (
        <>
          <TitleH2>Читаю</TitleH2>
          <Table>
            <thead>
              <TrHead>
                <th>Назва книги</th>
                <th>Автор</th>
                <th>Рік</th>
                <th>Стор.</th>
              </TrHead>
            </thead>

            <tbody>
              {currentlyReading.map(b => {
                return (
                  <Tr key={b._id}>
                    <td>
                      <BookIcon />
                      {b.title}
                    </td>
                    <td>{b.author}</td>
                    <td>{b.publishYear}</td>
                    <td>{b.pagesTotal}</td>
                  </Tr>
                );
              })}
            </tbody>
          </Table>
        </>
      )}
      {goingToRead.length !== 0 && (
        <>
          <TitleH2>Маю намір прочитати</TitleH2>
          <Table>
            <thead>
              <TrHead>
                <th>Назва книги</th>
                <th>Автор</th>
                <th>Рік</th>
                <th>Стор.</th>
              </TrHead>
            </thead>

            <tbody>
              {goingToRead.map(b => {
                return (
                  <Tr key={b._id}>
                    <td>
                      <BookIcon />
                      {b.title}
                    </td>
                    <td>{b.author}</td>
                    <td>{b.publishYear}</td>
                    <td>{b.pagesTotal}</td>
                  </Tr>
                );
              })}
            </tbody>
          </Table>
          <NavLink to="/training">
            <button type="button">Моє тренування</button>
          </NavLink>
        </>
      )}
      {finishedReading.length === 0 && goingToRead.length === 0 && currentlyReading.length === 0 && (<EmptyPageDiv><p>Додати книжку 👇</p>
      <NavLink to="/addbook">
        <More />
      </NavLink></EmptyPageDiv>)}<NavLinkMore to="/addbook">
        <More />
      </NavLinkMore>
    </Container>
  );
};
