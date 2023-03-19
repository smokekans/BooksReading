import { useState } from 'react';
import { useSelector } from 'react-redux';
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
import icons from '../../images/symbol-defs.svg';
import ExitModal from 'components/Modal/ModalHeader/ModalHeader';
import { SwitchLanguage } from 'components/SwitchLanguage/SwitchLanguage';
import { getLanguage } from 'redux/language/languageSelectors';
import { langHeader } from 'languages/langHeader';

export const Header = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);
  const isLoggedIn = useSelector(getIsLoggedIn);
  const userName = useSelector(getUserName);
  const userAvatar = userName?.at(0)?.toUpperCase();
  const lang = useSelector(getLanguage);
  const { exit } = langHeader;

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
              
            <UserInfo>
              <UserAvatar>{userAvatar}</UserAvatar>
              <UserName>{userName}</UserName>
            </UserInfo>
            
              <SwitchLanguage/>
              <ExitButton onClick={openExitModal}>
                {exit[lang]}
              </ExitButton>
            </UserPanel>
          </>
        )}{!isLoggedIn && <SwitchLanguage/>}
      </HeaderWrapper>
      {isModalOpen && <ExitModal closeModal={closeModal} />}
    </>
  );
};
