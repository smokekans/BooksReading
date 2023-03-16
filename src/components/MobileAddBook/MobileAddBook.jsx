import { LibraryAddBook } from 'components/LibraryAddBook/LibraryAddBook';
import { ModalEmptyLibrary } from 'components/Modal/ModalEmptyLibrary/ModalEmptyLibrary';
import Modal from 'components/Modal/Modal/Modal';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { StyledBackBtn, Wrapper } from './MobileAddBook.styled';
import { ReactComponent as BackIcon } from '../MobileAddBook/back.svg';

export const MobileAddBook = () => {
  const [isEmpty] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => setIsModalVisible(!isModalVisible);
  const navigate = useNavigate();

  useEffect(() => {
    isEmpty ? setIsModalVisible(true) : setIsModalVisible(false);
  }, [isEmpty]);

  return (
    <Wrapper>
      <StyledBackBtn onClick={() => navigate('/library')}>
        <BackIcon />
      </StyledBackBtn>
      <LibraryAddBook />
      {isEmpty && isModalVisible && (
        <Modal onClose={toggleModal}>
          <ModalEmptyLibrary onClick={toggleModal} isEmptyLibrary={!isEmpty} />
        </Modal>
      )}
    </Wrapper>
  );
};
