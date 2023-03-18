import { useSelector } from 'react-redux';
import {
  getGoingToRead,
  getCurrentlyReading,
  getFinishedReading,
} from 'redux/book/bookSelectors';
import {
  TitleH2,
  Table,
  Tr,
  TrHead,
  EmptyPageDiv,
  NavLinkMore,
  Container,
  ButtonMyTrain,
  UlMobile,
  LiMobile,
  H3Mobile,
  PMobile,
  SpanMobile,
  Button,
  SpanIconBook,
} from './LibraryTable.styled';
import { ReactComponent as BookIcon } from './svg/bookIconGrey.svg';
import { ReactComponent as More } from './svg/more.svg';
import { ReactComponent as BookOrange } from './svg/flat.svg';
import { NavLink } from 'react-router-dom';
import useMatchMedia from 'hooks/useMatchMedia';
import Modal from 'components/Modal/Modal/Modal';
import { Rate } from 'antd';
import { useState } from 'react';

export const LibraryTable = () => {
  const goingToRead = useSelector(getGoingToRead);
  const currentlyReading = useSelector(getCurrentlyReading);
  const finishedReading = useSelector(getFinishedReading);
  const { isMobile } = useMatchMedia();

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Container>
      {finishedReading?.length !== 0 && (
        <>
          <TitleH2>Прочитано</TitleH2>
          {isMobile ? (
            <UlMobile>
              {finishedReading?.map(b => {
                return (
                  <LiMobile key={b._id}>
                    <H3Mobile>
                      <BookIcon />
                      {b.title}
                    </H3Mobile>
                    <PMobile>
                      <div>
                        <SpanMobile>Автор:</SpanMobile>
                        <span>{b.author}</span>
                      </div>
                      <div>
                        <SpanMobile>Рік:</SpanMobile>
                        <span>{b.publishYear}</span>
                      </div>
                      <div>
                        <SpanMobile>Стор.:</SpanMobile>
                        <span>{b.pagesTotal}</span>
                      </div>
                      <div>
                        <SpanMobile>Рейтинг:</SpanMobile>
                        <Rate style={{ width: '120px', fontSize: '17px' }} />
                      </div>
                      <Button type="button" onClick={toggleModal}>
                        Резюме
                      </Button>
                    </PMobile>
                  </LiMobile>
                );
              })}
              {isOpen && <Modal onClose={toggleModal} />}
            </UlMobile>
          ) : (
            <Table>
              <thead>
                <TrHead>
                  <th width="30%">Назва книги</th>
                  <th width="20%">Автор</th>
                  <th width="10%">Рік</th>
                  <th width="10%">Стор.</th>
                  <th width="15%">Рейтинг книги</th>
                  <th width="15%"></th>
                </TrHead>
              </thead>

              <tbody>
                {finishedReading?.map(b => {
                  return (
                    <Tr key={b._id}>
                      <td>
                        <SpanIconBook>
                          <BookIcon />
                          {b.title}
                        </SpanIconBook>
                      </td>
                      <td>{b.author}</td>
                      <td>{b.publishYear}</td>
                      <td>{b.pagesTotal}</td>
                      <td>
                        <Rate style={{ width: '120px', fontSize: '17px' }} />
                      </td>
                      <td>
                        <Button type="button" onClick={toggleModal}>
                          Резюме
                        </Button>
                      </td>
                      {isOpen && <Modal onClose={toggleModal} />}
                    </Tr>
                  );
                })}
              </tbody>
            </Table>
          )}
        </>
      )}
      {currentlyReading?.length !== 0 && (
        <>
          <TitleH2>Читаю</TitleH2>
          {isMobile ? (
            <UlMobile>
              {currentlyReading?.map(b => {
                return (
                  <LiMobile key={b._id}>
                    <H3Mobile>
                      <BookOrange />
                      {b.title}
                    </H3Mobile>
                    <PMobile>
                      <div>
                        <SpanMobile>Автор:</SpanMobile>
                        <span>{b.author}</span>
                      </div>
                      <div>
                        <SpanMobile>Рік:</SpanMobile>
                        <span>{b.publishYear}</span>
                      </div>
                      <div>
                        <SpanMobile>Стор.:</SpanMobile>
                        <span>{b.pagesTotal}</span>
                      </div>
                    </PMobile>
                  </LiMobile>
                );
              })}
            </UlMobile>
          ) : (
            <Table>
              <thead>
                <TrHead>
                  <th width="50%">Назва книги</th>
                  <th width="30%">Автор</th>
                  <th width="10%">Рік</th>
                  <th width="10%">Стор.</th>
                </TrHead>
              </thead>

              <tbody>
                {currentlyReading?.map(b => {
                  return (
                    <Tr key={b._id}>
                      <td>
                        <BookOrange />
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
          )}
        </>
      )}
      {goingToRead?.length !== 0 && (
        <>
          <TitleH2>Маю намір прочитати</TitleH2>
          {isMobile ? (
            <UlMobile>
              {goingToRead?.map(b => {
                return (
                  <LiMobile key={b._id}>
                    <H3Mobile>
                      <BookIcon />
                      {b.title}
                    </H3Mobile>
                    <PMobile>
                      <div>
                        <SpanMobile>Автор:</SpanMobile>
                        <span>{b.author}</span>
                      </div>
                      <div>
                        <SpanMobile>Рік:</SpanMobile>
                        <span>{b.publishYear}</span>
                      </div>
                      <div>
                        <SpanMobile>Стор.:</SpanMobile>
                        <span>{b.pagesTotal}</span>
                      </div>
                    </PMobile>
                  </LiMobile>
                );
              })}
            </UlMobile>
          ) : (
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
                {goingToRead?.map(b => {
                  return (
                    <Tr key={b._id}>
                      <td width="50%">
                        <SpanIconBook>
                          <BookIcon />
                          {b.title}
                        </SpanIconBook>
                      </td>
                      <td width="30%">{b.author}</td>
                      <td width="10%">{b.publishYear}</td>
                      <td width="10%">{b.pagesTotal}</td>
                    </Tr>
                  );
                })}
              </tbody>
            </Table>
          )}

          <ButtonMyTrain to="/training">Моє тренування</ButtonMyTrain>
        </>
      )}
      {finishedReading?.length === 0 &&
        goingToRead?.length === 0 &&
        currentlyReading?.length === 0 && (
          <EmptyPageDiv>
            <p>Додати книжку 👇</p>
            <NavLink to="/addbook">
              <More />
            </NavLink>
          </EmptyPageDiv>
        )}
      <NavLinkMore to="/addbook">
        <More />
      </NavLinkMore>
    </Container>
  );
};
