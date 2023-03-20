import React from 'react';
import { createPortal } from 'react-dom';
import {
  DoneBtn,
  MessageSuccess,
  ModalFinish,
  OverlayModal,
} from './ModalFinishedBooks.styled';
import { ReactComponent as IconLike } from '../../../images/like.svg';
import { useSelector } from 'react-redux';
import { getLanguage } from 'redux/language/languageSelectors';
import { langModals } from 'languages/langModals';

const modalRoot = document.querySelector('#modal-root');

export const ModalFinishedBooks = ({ onClose }) => {
  const lang = useSelector(getLanguage);
  const { congrat, anotherbook, done } = langModals;

  return createPortal(
    <OverlayModal>
      <ModalFinish>
        <IconLike />
        <MessageSuccess>
          {congrat[lang]}
          <br /> {anotherbook[lang]}
        </MessageSuccess>
        <DoneBtn onClick={() => onClose()} type="button">
          {done[lang]}
        </DoneBtn>
      </ModalFinish>
    </OverlayModal>,
    modalRoot
  );
};
