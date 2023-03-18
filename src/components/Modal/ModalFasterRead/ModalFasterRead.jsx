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

export const ModalFasterRead = ({ onClose, onClick }) => {
  return createPortal(
    <OverlayModal>
      <ModalFinish>
        <IconLike />
        <MessageSuccess>
           Well done! <br /> but you need to be a little bit faster. <br /> You can do it)
        </MessageSuccess>
        <DoneBtn onClick={() => onClick()} type="button">
        New training
        </DoneBtn>
        <DoneBtn onClick={() => onClose()} type="button">
        Back
        </DoneBtn>
      </ModalFinish>
    </OverlayModal>,
    modalRoot
  );
};
