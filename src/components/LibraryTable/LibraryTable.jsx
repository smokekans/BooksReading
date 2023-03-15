import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBook } from 'redux/book/bookSelectors';
import { TitleH2, Table, Tr, TrHead } from './LibraryTable.styled';
import { fetchAllBooks } from 'redux/book/bookOperations';

export const LibraryTable = () => {
  const books = useSelector(getBook);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllBooks());
  }, [dispatch]);

  return (
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
          {books.map(b => {
              return (
                <Tr key={b.title}>
                  <td>{b.title}</td>
                  <td>{b.author}</td>
                  <td>{b.publishYear}</td>
                  <td>{b.totalPages}</td>
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
          {books.map(b => {
              return (
                <Tr key={b.title}>
                  <td>{b.title}</td>
                  <td>{b.author}</td>
                  <td>{b.publishYear}</td>
                  <td>{b.totalPages}</td>
                </Tr>
              );
            })}
        </tbody>
      </Table>
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
          {books.map(b => {
              return (
                <Tr key={b.title}>
                  <td>{b.title}</td>
                  <td>{b.author}</td>
                  <td>{b.publishYear}</td>
                  <td>{b.totalPages}</td>
                </Tr>
              );
            })}
        </tbody>
      </Table>
      <button type="button">Моє тренування</button>
    </>
  );
};
