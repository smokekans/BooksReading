import { useDispatch, useSelector } from 'react-redux';
import { Button, ButtonWrapper, Text } from './ModalHeader.styled';
import { getUserId } from "redux/auth/authSelectors";
import { logOutThunk } from "redux/auth/authOperations";
import ModalWrapper from "../ModalHeaderWrapper/ModalHeaderWrapper"


const ExitModal = ({ closeModal }) => {
   const dispatch = useDispatch();
   const id = useSelector(getUserId);

   const handleLogOut = () => {
       dispatch(logOutThunk(id));
       closeModal();
   };

   return (
       <>
           <ModalWrapper variant={'info'} closeModal={closeModal}>
               <Text>
                   Якщо Ви вийдете з програми незбережені дані будуть втрачені
               </Text>
               <ButtonWrapper>
                   <Button variant={'transparent'} onClick={closeModal}>
                       Відміна
                   </Button>
                   <Button variant={'accent'} onClick={handleLogOut}>
                       Вийти
                   </Button>
               </ButtonWrapper>
           </ModalWrapper>
       </>
   );
};

export default ExitModal;