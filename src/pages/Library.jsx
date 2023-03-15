import { LibraryAddBook } from 'components/LibraryAddBook/LibraryAddBook';
import { LibraryTable } from 'components/LibraryTable/LibraryTable';
import { EmptyLibrary } from 'components/modal/EmptyLybrary/EmptyLibrary';

const Library = () => {
  return (
    <>
      <LibraryAddBook />
      <EmptyLibrary />
      <LibraryTable />
    </>
  );
};

export default Library;
