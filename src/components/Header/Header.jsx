import { useState } from 'react';
import { /*useDispatch*/ useSelector } from 'react-redux';
import {
  HeaderWrapper,
  Icon,
  Link,
  Logo,
  Nav,
  NavItem,
  NavList,
  UserAvatar,
  UserName,
  UserPanel,
  ExitButton,
  UserInfo,
} from './Header.styled';
import { getUserName, getIsLoggedIn } from '../../redux/auth/authSelectors';
// import { logOutThunk } from 'redux/auth/authOperations';
import icons from '../../images/symbol-defs.svg';
import ExitModal from 'components/Modal/ModalHeader/ModalHeader';

export const Header = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);

//   const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);
  const userName = useSelector(getUserName);
  const userAvatar = userName?.at(0)?.toUpperCase();

  const openExitModal = () => {
   setIsModalOpen(true);
};

const closeModal = () => {
   setIsModalOpen(false);
};

  return (
    <>
      <HeaderWrapper>
        <Logo isLoggedIn={isLoggedIn}>BR</Logo>
        {isLoggedIn && (
          <>
            <UserInfo>
              <UserAvatar>{userAvatar}</UserAvatar>
              <UserName>{userName}</UserName>
            </UserInfo>
            <UserPanel>
              <Nav>
                <NavList>
                  <NavItem>
                    <Link to={'training'}>
                      <Icon width="22" height="17">
                        <use href={`${icons}#group`} />
                      </Icon>
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link to={'library'}>
                      <Icon width="20" height="17">
                        <use href={`${icons}#home`} />
                      </Icon>
                    </Link>
                  </NavItem>
                </NavList>
              </Nav>
              {/* <ExitButton
                type="button"
                onClick={() => {
                  dispatch(logOutThunk());
                }}
              > */}
              <ExitButton onClick={openExitModal}>
                Вихід
              </ExitButton>
              {/* </ExitButton> */}
            </UserPanel>
          </>
        )}
      </HeaderWrapper>
      {isModalOpen && <ExitModal closeModal={closeModal} />}
    </>
  );
};
