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
  //   UserAvatar,
  UserName,
  UserPanel,
} from './Header.styled';
import { getUserName, getIsLoggedIn } from '../../redux/auth/authSelectors';

import { useSelector } from 'react-redux';

export const Header = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const userName = useSelector(getUserName);
  //   const userAvatar = userName[0]?.toUpperCase();

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
                  {/* <UserAvatar>{userAvatar}</UserAvatar> */}
                  <UserName>{userName}</UserName>
                </UserPanel>
              </>
            )}
          </HeaderWrapper>
        </Container>
      </HeaderStyled>
    </>
  );
};
