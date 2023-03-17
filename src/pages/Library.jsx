import { LibraryAddBook } from 'components/LibraryAddBook/LibraryAddBook';
import { LibraryTable } from 'components/LibraryTable/LibraryTable';
import { useSelector } from 'react-redux';
import { ModalEmptyLibrary } from 'components/Modal/ModalEmptyLibrary/ModalEmptyLibrary';
import {
  getCurrentlyReading,
  getFinishedReading,
  getGoingToRead,
} from 'redux/book/bookSelectors';
import useMatchMedia from 'hooks/useMatchMedia';

const Library = () => {
  const { isMobile } = useMatchMedia();

  const goingToRead = useSelector(getGoingToRead);
  const currentlyReading = useSelector(getCurrentlyReading);
  const finishedReading = useSelector(getFinishedReading);

  const emptyList =
    goingToRead.length === 0 &&
    currentlyReading.length === 0 &&
    finishedReading.length === 0;

  return (
    <>
      {isMobile ? (
        <LibraryTable />
      ) : emptyList ? (
        <>
          <LibraryAddBook />
          <ModalEmptyLibrary />
        </>
      ) : (
        <>
          <LibraryAddBook />
          <LibraryTable />
        </>
      )}
    </>
  );
};

export default Library;
