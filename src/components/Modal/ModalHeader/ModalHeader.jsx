import { useDispatch, useSelector } from 'react-redux';
import { Button, ButtonExit, ButtonWrapper, Text } from './ModalHeader.styled';
import { getUserId } from 'redux/auth/authSelectors';
import { logOutThunk } from 'redux/auth/authOperations';
import ModalWrapper from '../ModalHeaderWrapper/ModalHeaderWrapper';
import { getLanguage } from 'redux/language/languageSelectors';
import { langModals } from 'languages/langModals';

const ExitModal = ({ closeModal }) => {
  const dispatch = useDispatch();
  const id = useSelector(getUserId);
  const lang = useSelector(getLanguage);
  const { unsaved, cancel, exit } = langModals;

  const handleLogOut = () => {
    dispatch(logOutThunk(id));
    closeModal();
  };

  return (
    <>
      <ModalWrapper variant={'info'} closeModal={closeModal}>
        <Text>{unsaved[lang]}</Text>
        <ButtonWrapper>
          <Button variant={'transparent'} onClick={closeModal}>
            {cancel[lang]}
          </Button>
          <ButtonExit variant={'accent'} onClick={handleLogOut}>
            {exit[lang]}
          </ButtonExit>
        </ButtonWrapper>
      </ModalWrapper>
    </>
  );
};

export default ExitModal;
