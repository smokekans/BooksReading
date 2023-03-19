import { useDispatch, useSelector } from "react-redux";
import { deleteBook } from "redux/planning/planningSlice";
import { Table, TableBodyItem, TableHeader, TableHeaderItem } from "../MyTraining.styled";
import { ReactComponent as BookIcon } from '../../LibraryTable/svg/bookIconGrey.svg'
import {ReactComponent as DeleteIcon} from '../svg/delete.svg'

export const TableComponent = () => {
    const filter = useSelector(state => state.planning.filter);
     const dispatch = useDispatch();
    // відправка інформації на сервер при кліку на кнопку тренування
  
  // видалення книжки
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
            <TableHeaderItem>Назва книги</TableHeaderItem>
            <TableHeaderItem>Автор</TableHeaderItem>
            <TableHeaderItem>Рік</TableHeaderItem>
          <TableHeaderItem>Стор.</TableHeaderItem>
          </TableHeader>
          </thead>
        <tbody>
          {filter.map(({ _id, title, author, publishYear, pagesTotal }) => {
            return (
              <tr key={_id} id={_id}>
                <TableBodyItem>
                  <BookIcon style={{ marginRight: "14px" }}/>
                  {title}
                  </TableBodyItem>
                <TableBodyItem>{author}</TableBodyItem>
                <TableBodyItem>{publishYear}</TableBodyItem>
                <TableBodyItem>{pagesTotal}</TableBodyItem>
                <TableBodyItem onClick={handleDeleteBook}>
                  <DeleteIcon/>
                </TableBodyItem>
              </tr>
            );
          })}
          <tr>
            <td><BookIcon style={{ marginRight: "14px" }}/>...</td>
          </tr>
        </tbody>
      </Table>
        </>
    )
}