import { LibraryAddBook } from 'components/LibraryAddBook/LibraryAddBook';
import { LibraryTable } from 'components/LibraryTable/LibraryTable';
import { EmptyLibrary } from 'components/Modal/EmptyLibrary/EmptyLibrary';

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
