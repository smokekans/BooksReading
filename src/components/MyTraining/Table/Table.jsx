import { useDispatch, useSelector } from 'react-redux';
import { deleteBook } from 'redux/planning/planningSlice';
import {
  MobileBooksItem,
  MobileBooksList,
  MobileBookText,
  MobileFirstChildContainer,
  MobileLanguageSwitchBlocks,
  MobileLanguageSwitchText,
  MobileTextContainer,
  Table,
  TableBodyItem,
  TableHeader,
  TableHeaderItem,
} from '../MyTraining.styled';
import { ReactComponent as BookIcon } from '../../LibraryTable/svg/bookIconGrey.svg';
import { ReactComponent as DeleteIcon } from '../svg/delete.svg';
import { langMyTraining } from 'languages/langMyTraining';
import { getLanguage } from 'redux/language/languageSelectors';
import useMatchMedia from 'hooks/useMatchMedia';

export const TableComponent = () => {
  const filter = useSelector(state => state.planning.filter);
  const dispatch = useDispatch();
  const lang = useSelector(getLanguage);
  const { title, author, publishYear, pagesTotal } = langMyTraining;
  const { isMobile } = useMatchMedia();

  // видалення книжки
  const handleDeleteBook = e => {
    console.dir(e.currentTarget);
    const removeBook = filter.filter(book => {
      return book._id !== e.currentTarget.parentElement.id;
    });
    dispatch(deleteBook(removeBook));
  };
  return (
    <>
      {isMobile ? (
        <MobileBooksList>
          {filter.map(({ _id, title, author, publishYear, pagesTotal }) => {
            return (
              <MobileBooksItem key={_id} id={_id}>
                <MobileFirstChildContainer id={_id}>
                  <p>
                    <BookIcon style={{ marginRight: '14px' }} />
                    {title}
                  </p>
                  <DeleteIcon onClick={handleDeleteBook} />
                </MobileFirstChildContainer>
                <MobileTextContainer>
                  <MobileLanguageSwitchBlocks>
                    <MobileLanguageSwitchText>
                      {langMyTraining.author[lang]}:
                    </MobileLanguageSwitchText>
                    <MobileLanguageSwitchText>
                      {langMyTraining.publishYear[lang]}:
                    </MobileLanguageSwitchText>
                    <MobileLanguageSwitchText>
                      {langMyTraining.pagesTotal[lang]}:
                    </MobileLanguageSwitchText>
                  </MobileLanguageSwitchBlocks>
                  <div>
                    <MobileBookText>{author}</MobileBookText>
                    <MobileBookText>{publishYear}</MobileBookText>
                    <MobileBookText>{pagesTotal}</MobileBookText>
                  </div>
                </MobileTextContainer>
              </MobileBooksItem>
            );
          })}
        </MobileBooksList>
      ) : (
        <Table>
          <thead>
            <TableHeader>
              <TableHeaderItem>{title[lang]}</TableHeaderItem>
              <TableHeaderItem>{author[lang]}</TableHeaderItem>
              <TableHeaderItem>{publishYear[lang]}</TableHeaderItem>
              <TableHeaderItem>{pagesTotal[lang]}.</TableHeaderItem>
            </TableHeader>
          </thead>
          <tbody>
            {filter.map(({ _id, title, author, publishYear, pagesTotal }) => {
              return (
                <tr
                  style={{
                    borderTop: '1px solid #E0E5EB',
                    borderBottom: '1px solid #E0E5EB',
                  }}
                  key={_id}
                  id={_id}
                >
                  <TableBodyItem>
                    <BookIcon style={{ marginRight: '14px' }} />
                    {title}
                  </TableBodyItem>
                  <TableBodyItem>{author}</TableBodyItem>
                  <TableBodyItem>{publishYear}</TableBodyItem>
                  <TableBodyItem>{pagesTotal}</TableBodyItem>
                  <TableBodyItem onClick={handleDeleteBook}>
                    <DeleteIcon />
                  </TableBodyItem>
                </tr>
              );
            })}
            <tr>
              <td style={{ paddingTop: '12px', paddingBottom: '16px' }}>
                <BookIcon style={{ marginRight: '14px' }} />
                ...
              </td>
            </tr>
          </tbody>
        </Table>
      )}
    </>
  );
};
