import { useDispatch, useSelector } from 'react-redux';
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
import useMatchMedia from 'hooks/useMatchMedia';
import { Rate } from 'antd';
import { useState } from 'react';
import { addIdReview } from 'redux/book/bookSlice';
import { getLanguage } from 'redux/language/languageSelectors';
import { langLibraryTable } from 'languages/langLibraryTable';
import { ModalRezume } from 'components/Modal/ModalRezume/ModalRezume';

export const LibraryTable = () => {
  const goingToRead = useSelector(getGoingToRead);
  const currentlyReading = useSelector(getCurrentlyReading);
  const finishedReading = useSelector(getFinishedReading);

  const dispatch = useDispatch();

  const { isMobile } = useMatchMedia();
  const lang = useSelector(getLanguage);
  const {
    title,
    author,
    publishYear,
    pagesTotal,
    rate,
    training,
    resume,
    readNow,
    goingread,
    alreadyread,
  } = langLibraryTable;

  const [bookId, setBookId] = useState('');

  dispatch(addIdReview(bookId));

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      {finishedReading?.length !== 0 && (
        <>
          <TitleH2>{alreadyread[lang]}</TitleH2>
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
                        <SpanMobile>{author[lang]}:</SpanMobile>
                        <span>{b.author}</span>
                      </div>
                      <div>
                        <SpanMobile>{publishYear[lang]}:</SpanMobile>
                        <span>{b.publishYear}</span>
                      </div>
                      <div>
                        <SpanMobile>{pagesTotal[lang]}:</SpanMobile>
                        <span>{b.pagesTotal}</span>
                      </div>
                      <div>
                        <SpanMobile>{rate[lang]}:</SpanMobile>

                        <Rate
                          value={b.rating}
                          style={{ width: '120px', fontSize: '17px' }}
                        />
                      </div>
                      <Button
                        type="button"
                        onClick={() => {
                          setBookId(b?._id);
                          toggleModal();
                        }}
                      >
                        {resume[lang]}
                      </Button>
                    </PMobile>
                  </LiMobile>
                );
              })}
              {isOpen && <ModalRezume onClose={toggleModal} />}
            </UlMobile>
          ) : (
            <Table>
              <thead>
                <TrHead>
                  <th width="30%">{title[lang]}</th>
                  <th width="20%">{author[lang]}</th>
                  <th width="10%">{publishYear[lang]}</th>
                  <th width="10%">{pagesTotal[lang]}</th>
                  <th width="15%">{rate[lang]}</th>
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
                        <Rate
                          value={b.rating}
                          style={{ width: '120px', fontSize: '17px' }}
                        />
                      </td>
                      <td>
                        <Button
                          type="button"
                          onClick={() => {
                            setBookId(b?._id);
                            toggleModal();
                          }}
                        >
                          {resume[lang]}
                        </Button>
                      </td>
                      {isOpen && <ModalRezume onClose={toggleModal} />}
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
          <TitleH2>{readNow[lang]}</TitleH2>
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
                        <SpanMobile>{author[lang]}:</SpanMobile>
                        <span>{b.author}</span>
                      </div>
                      <div>
                        <SpanMobile>{publishYear[lang]}:</SpanMobile>
                        <span>{b.publishYear}</span>
                      </div>
                      <div>
                        <SpanMobile>{pagesTotal[lang]}:</SpanMobile>
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
                  <th width="50%">{title[lang]}</th>
                  <th width="30%">{author[lang]}</th>
                  <th width="10%">{publishYear[lang]}</th>
                  <th width="10%">{pagesTotal[lang]}</th>
                </TrHead>
              </thead>

              <tbody>
                {currentlyReading?.map(b => {
                  return (
                    <Tr key={b._id}>
                      <td>
                        <SpanIconBook>
                          <BookOrange />
                          {b.title}
                        </SpanIconBook>
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
          <TitleH2>{goingread[lang]}</TitleH2>
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
                        <SpanMobile>{author[lang]}:</SpanMobile>
                        <span>{b.author}</span>
                      </div>
                      <div>
                        <SpanMobile>{publishYear[lang]}:</SpanMobile>
                        <span>{b.publishYear}</span>
                      </div>
                      <div>
                        <SpanMobile>{pagesTotal[lang]}:</SpanMobile>
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
                  <th>{title[lang]}</th>
                  <th>{author[lang]}</th>
                  <th>{publishYear[lang]}</th>
                  <th>{pagesTotal[lang]}</th>
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

          <ButtonMyTrain to="/training">{training[lang]}</ButtonMyTrain>
        </>
      )}
      {/* {finishedReading?.length === 0 &&
        goingToRead?.length === 0 &&
        currentlyReading?.length === 0 && (
          <EmptyPageDiv>
            <p>Додати книжку 👇</p>
            <NavLink to="/addbook">
              <More />
            </NavLink>
          </EmptyPageDiv>
        )} */}
      <NavLinkMore to="/addbook">
        <More />
      </NavLinkMore>
    </Container>
  );
};
