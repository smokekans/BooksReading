import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getBook,
  getCurrentlyReading,
  getFinishedReading,
} from 'redux/book/bookSelectors';
import { TitleH2, Table, Tr, TrHead } from './LibraryTable.styled';
import { fetchAllBooks } from 'redux/book/bookOperations';

export const LibraryTable = () => {
  const goingToRead = useSelector(getBook);
  const currentlyReading = useSelector(getCurrentlyReading);
  const finishedReading = useSelector(getFinishedReading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllBooks());
  }, [dispatch]);

  return (
    <>
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
                    <td>{b.title}</td>
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
                    <td>{b.title}</td>
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
                    <td>{b.title}</td>
                    <td>{b.author}</td>
                    <td>{b.publishYear}</td>
                    <td>{b.pagesTotal}</td>
                  </Tr>
                );
              })}
            </tbody>
          </Table>
          <button type="button">Моє тренування</button>
        </>
      )}
    </>
  );
};
