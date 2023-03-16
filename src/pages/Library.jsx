import { LibraryAddBook } from 'components/LibraryAddBook/LibraryAddBook';
import { LibraryTable } from 'components/LibraryTable/LibraryTable';
import { useSelector } from 'react-redux';
import { getBook } from 'redux/book/bookSelectors';
import { ModalEmptyLibrary } from 'components/Modal/ModalEmptyLibrary/ModalEmptyLibrary';

const Library = () => {
  const books = useSelector(getBook);

  return (
    <>
      <LibraryAddBook />
      {books.length === 0 ? <ModalEmptyLibrary /> : <LibraryTable />}
    </>
  );
};

export default Library;
