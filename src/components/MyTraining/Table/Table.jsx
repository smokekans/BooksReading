import { useDispatch, useSelector } from 'react-redux';
import { deleteBook } from 'redux/planning/planningSlice';
import {
  Table,
  TableBodyItem,
  TableHeader,
  TableHeaderItem,
} from '../MyTraining.styled';
import { ReactComponent as BookIcon } from '../../LibraryTable/svg/bookIconGrey.svg';
import { ReactComponent as DeleteIcon } from '../svg/delete.svg';
import { langMyTraining } from 'languages/langMyTraining';
import { getLanguage } from 'redux/language/languageSelectors';

export const TableComponent = () => {
  const filter = useSelector(state => state.planning.filter);
  const dispatch = useDispatch();
  const lang = useSelector(getLanguage);
  const { title, author, publishYear, pagesTotal } = langMyTraining;

  const handleDeleteBook = e => {
    const removeBook = filter.filter(book => {
      return book._id !== e.currentTarget.parentElement.id;
    });
    dispatch(deleteBook(removeBook));
  };

  return (
    <>
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
              <tr key={_id} id={_id}>
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
            <td>
              <BookIcon style={{ marginRight: '14px' }} />
              ...
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};
