import { useSelector, useDispatch } from 'react-redux';
import {
  getGoingToRead,
  getCurrentlyReading,
  getFinishedReading,
} from 'redux/book/bookSelectors';
import { deleteBook } from 'redux/book/bookOperations';
import {
  TitleH2,
  Table,
  Tr,
  TrHead,
  NavLinkMore,
  ButtonMyTrain,
  UlMobile,
  LiMobile,
  H3Mobile,
  PMobile,
  SpanMobile,
  Button,
  SpanIconBook,
  ButtonDelete,
  ButtonDeleteMob,
} from './LibraryTable.styled';
import { ReactComponent as BookIcon } from './svg/bookIconGrey.svg';
import { ReactComponent as More } from './svg/more.svg';
import { ReactComponent as BookOrange } from './svg/flat.svg';
import useMatchMedia from 'hooks/useMatchMedia';
import Modal from 'components/Modal/Modal/Modal';
import { Rate } from 'antd';
import { useState } from 'react';
import { getLanguage } from 'redux/language/languageSelectors';
import { langLibraryTable } from 'languages/langLibraryTable';
import { ToastContainer, toast } from 'react-toastify';

export const LibraryTable = () => {
  const dispatch = useDispatch();
  const goingToRead = useSelector(getGoingToRead);
  const currentlyReading = useSelector(getCurrentlyReading);
  const finishedReading = useSelector(getFinishedReading);
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
    bookl, 
    deletel
  } = langLibraryTable;

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const deleteBookk = deleteId => {
    dispatch(deleteBook(deleteId));
    toast.error(`${bookl[lang]} ${deletel[lang]}`);
  };

  return (
    <><ToastContainer autoClose={2000} />
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
                        <Rate style={{ width: '120px', fontSize: '17px' }} />
                      </div>
                      <Button type="button" onClick={toggleModal}>
                        {resume[lang]}
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
                        <Rate style={{ width: '101px', fontSize: '12px' }} />
                      </td>
                      <td>
                        <Button type="button" onClick={toggleModal}>
                          {resume[lang]}
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
                    <ButtonDeleteMob
                      type="button"
                      onClick={() => deleteBookk(b._id)}
                    >
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
                    </ButtonDeleteMob>
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
                      <td width="6%">{b.pagesTotal}</td>
                      <td width="4%">
                        <ButtonDelete
                          type="button"
                          onClick={() => deleteBookk(b._id)}
                        >
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
                        </ButtonDelete>
                      </td>
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
    </>
  );
};
