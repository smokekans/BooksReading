import React from 'react';
import { Link } from 'react-router-dom';
import { createPortal } from 'react-dom';
import {
  DoneBtn,
  MessageSuccess,
  ModalFinish,
  OverlayModal,
  WrapBtn,
} from '../ModalFasterRead/ModalFasterRead.styled';
import { ReactComponent as IconLike } from '../../../images/likeGrey.svg';
import { useSelector } from 'react-redux';
import { getLanguage } from 'redux/language/languageSelectors';
import { langModals } from 'languages/langModals';

const modalRoot = document.querySelector('#modal-root');

export const ModalFasterRead = ({ onClose }) => {
  const lang = useSelector(getLanguage);
  const { well, faster, training, back } = langModals;

  return createPortal(
    <OverlayModal>
      <ModalFinish>
        <IconLike />
        <MessageSuccess>
          {well[lang]} <br /> {faster[lang]}
        </MessageSuccess>
        <WrapBtn>
          <Link to="/training">
            <DoneBtn type="button">{training[lang]}</DoneBtn>
          </Link>
          <DoneBtn onClick={() => onClose()} type="button">
            {back[lang]}
          </DoneBtn>
        </WrapBtn>
      </ModalFinish>
    </OverlayModal>,
    modalRoot
  );
};
