import React from 'react';
import { createPortal } from 'react-dom';
import {
  DoneBtn,
  MessageSuccess,
  ModalFinish,
  OverlayModal,
} from './ModalFinishedBooks.styled';
import { ReactComponent as IconLike } from '../../../images/like.svg';

const modalRoot = document.querySelector('#modal-root');

export const ModalFinishedBooks = ({ onClose }) => {
  return createPortal(
    <OverlayModal>
      <ModalFinish>
        <IconLike />
        <MessageSuccess>
          Вітаю!
          <br /> Ще одна книга прочитана.
        </MessageSuccess>
        <DoneBtn onClick={() => onClose()} type="button">
          Готово
        </DoneBtn>
      </ModalFinish>
    </OverlayModal>,
    modalRoot
  );
};
