import {
  Container,
  HeaderStyled,
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
  UserInfo
} from './Header.styled';
import { getUserName, getIsLoggedIn } from '../../redux/auth/authSelectors';
import { logOutThunk } from 'redux/auth/authOperations'

import { useDispatch, useSelector } from 'react-redux';

export const Header = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);
  const userName = useSelector(getUserName);
    const userAvatar = userName?.at(0)?.toUpperCase();

  

  return (
    <>
      <HeaderStyled>
        <Container>
          <HeaderWrapper>
            <Logo isLoggedIn={isLoggedIn}>BR</Logo>
            {isLoggedIn && (
              <>
                <Nav>
                  <NavList>
                    <NavItem>
                      <Link to={'library'}>
                        <Icon width="22" height="17"></Icon>
                      </Link>
                    </NavItem>
                    <NavItem>
                      <Link to={'training'}>
                        <Icon width="20" height="17"></Icon>
                      </Link>
                    </NavItem>
                  </NavList>
                </Nav>
                <UserPanel>
                  <UserInfo>
                     <UserAvatar>{userAvatar}</UserAvatar>
                     <UserName>{userName}</UserName>
                  </UserInfo>
                  <ExitButton type="button" onClick={() => {dispatch(logOutThunk())}}>
                     Вихід
                  </ExitButton>
                </UserPanel>
              </>
            )}
          </HeaderWrapper>
        </Container>
      </HeaderStyled>
    </>
  );
};
