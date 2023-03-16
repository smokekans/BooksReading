// import { MobileAddBook } from 'components/MobileAddBook/MobileAddBook';

import { useNavigate } from 'react-router-dom';
import Modal from '../components/Modal/Modal/Modal';
import { StyledBackBtn } from 'components/MobileAddBook/MobileAddBook.styled';
import { ReactComponent as BackIcon } from 'components/MobileAddBook/back.svg';
import { useEffect, useState } from 'react';
import { ModalEmptyLibrary } from 'components/Modal/ModalEmptyLibrary/ModalEmptyLibrary';
import { LibraryAddBook } from 'components/LibraryAddBook/LibraryAddBook';
import { useSelector } from 'react-redux';
import {
  getCurrentlyReading,
  getFinishedReading,
  getGoingToRead,
} from 'redux/book/bookSelectors';

const AddBook = () => {
  const [isEmpty] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => setIsModalVisible(!isModalVisible);

  useEffect(() => {
    isEmpty ? setIsModalVisible(true) : setIsModalVisible(false);
  }, [isEmpty]);

  const navigate = useNavigate();

  const goingToRead = useSelector(getGoingToRead);
  const currentlyReading = useSelector(getCurrentlyReading);
  const finishedReading = useSelector(getFinishedReading);

  const emptyList =
    goingToRead.length === 0 &&
    currentlyReading.length === 0 &&
    finishedReading.length === 0;

  return (
    <>
      <StyledBackBtn onClick={() => navigate('/library')}>
        <BackIcon />
      </StyledBackBtn>
      <LibraryAddBook />
      {emptyList && isEmpty && isModalVisible && (
        <Modal onClose={toggleModal}>
          <ModalEmptyLibrary onClick={toggleModal} isEmptyLibrary={!isEmpty} />
        </Modal>
      )}
    </>
  );
};

export default AddBook;
