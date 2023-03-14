import React from 'react';
import { useSelector } from 'react-redux';
import { getBook } from 'redux/book/bookSelectors';

export const LibraryTable = () => {
    const books = useSelector(getBook);

  return (
    <>
      <h1>Маю намір прочитати</h1>
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
          {books.map(b => {
            return (
              <tr key={b.title}>
                <td>{b.title}</td>
                <td>{b.author}</td>
                <td>{b.publishYear}</td>
                <td>{b.totalPages}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
