import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBook, getCurrentlyReading, getFinishedReading } from 'redux/book/bookSelectors';
import { TitleH2, Table, Tr, TrHead } from './LibraryTable.styled';
import { fetchAllBooks } from 'redux/book/bookOperations';
import { ReactComponent as BookIcon } from './svg/bookIconGrey.svg';
import { ReactComponent as More } from './svg/more.svg';
import { NavLink } from 'react-router-dom';
import Modal from 'components/Modal/Modal/Modal';
import { Rate } from 'antd';

export const LibraryTable = () => {
  const goingToRead = useSelector(getBook);
  const currentlyReading = useSelector(getCurrentlyReading);
  const finishedReading = useSelector(getFinishedReading);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchAllBooks());
  }, [dispatch]);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
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
                    <td>
                      <BookIcon />
                      {b.title}
                    </td>
                    <td>{b.author}</td>
                    <td>{b.publishYear}</td>
                    <td>{b.pagesTotal}</td>
                    <td>
                      <Rate style={{ width: '120px', fontSize: '17px' }} />
                    </td>
                    <td>
                      <button type="button" onClick={toggleModal}>
                        Резюме
                      </button>
                    </td>
                  </Tr>
                );
              })}
            </tbody>
          </Table>
          {isOpen && <Modal onClose={toggleModal} />}
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
          <More />
        </>
      )}
    </>
  );
};
