import React from 'react';
import { Link } from 'react-router-dom';
import { createPortal } from 'react-dom';
import {
  DoneBtn,
  MessageSuccess,
  ModalFinish,
  OverlayModal,
  WrapBtn
} from '../ModalFasterRead/ModalFasterRead.styled';
import { ReactComponent as IconLike } from '../../../images/likeGrey.svg';

const modalRoot = document.querySelector('#modal-root');

export const ModalFasterRead = ({ onClose }) => {
  return createPortal(
    <OverlayModal>
      <ModalFinish>
        <IconLike />
        <MessageSuccess>
           Well done! <br /> But you need to be a little bit faster. You can do it ;)
        </MessageSuccess>
        <WrapBtn>
          <Link to="/training">
        <DoneBtn type="button">
        New training
        </DoneBtn>
        </Link>
        <DoneBtn onClick={() => onClose()} type="button">
        Back
        </DoneBtn>
        </WrapBtn>
      </ModalFinish>
    </OverlayModal>,
    modalRoot
  );
};
