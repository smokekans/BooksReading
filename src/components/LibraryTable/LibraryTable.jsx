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
import { NavLink } from 'react-router-dom';
import useMatchMedia from 'hooks/useMatchMedia';

export const LibraryTable = () => {
  const goingToRead = useSelector(getGoingToRead);
  const currentlyReading = useSelector(getCurrentlyReading);
  const finishedReading = useSelector(getFinishedReading);
  const { isMobile } = useMatchMedia();

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
                        <SpanMobile>*****</SpanMobile>
                      </div>
                      <Button type="button">Резюме</Button>
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
                  <th>Рейтинг книги</th>
                  <th></th>
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
                        <span>*****</span>
                      </td>
                      <td>
                        <Button type="button">Резюме</Button>
                      </td>
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
                {currentlyReading?.map(b => {
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
                      <td>
                        <SpanIconBook>
                          <BookIcon />
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
