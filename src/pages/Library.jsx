import { LibraryAddBook } from 'components/LibraryAddBook/LibraryAddBook';
import { LibraryTable } from 'components/LibraryTable/LibraryTable';
import { useDispatch, useSelector } from 'react-redux';
import { ModalEmptyLibrary } from 'components/Modal/ModalEmptyLibrary/ModalEmptyLibrary';
import {
  getCurrentlyReading,
  getFinishedReading,
  getGoingToRead,
} from 'redux/book/bookSelectors';
import useMatchMedia from 'hooks/useMatchMedia';
import { fetchAllBooks } from 'redux/book/bookOperations';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Library = () => {
  const { isMobile } = useMatchMedia();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goingToRead = useSelector(getGoingToRead);
  const currentlyReading = useSelector(getCurrentlyReading);
  const finishedReading = useSelector(getFinishedReading);

  useEffect(() => {
    dispatch(fetchAllBooks());
  }, [dispatch]);

  const emptyList =
    goingToRead?.length === 0 &&
    currentlyReading?.length === 0 &&
    finishedReading?.length === 0;

  useEffect(() => {
    if (isMobile && emptyList) {
      navigate('/addbook');
    }
  }, [isMobile, emptyList, navigate]);

  return (
    <>
      {isMobile ? (
        emptyList ? (
          <>
            <LibraryAddBook />
            <ModalEmptyLibrary />
          </>
        ) : (
          <LibraryTable />
        )
      ) : (
        <>
          <LibraryAddBook />
          {emptyList ? <ModalEmptyLibrary /> : <LibraryTable />}
        </>
      )}
    </>
  );
};

export default Library;
