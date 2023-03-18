import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
// import device from 'hooks/device';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
  background-color: #fff;
`;

export const Logo = styled.p`
  display: flex;
  font-family: 'Abril Fatface';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 27px;
`;

export const Nav = styled.nav`
  display: flex;
  
`;

export const NavList = styled.ul`
  display: flex;
  margin-right: 20px;
`;

export const NavItem = styled.li`
  display: flex;

  &:first-child {
    margin-right: 13px;
  }

  &:last-child {
    padding-right: 6px;
    border-right: 1px solid #e0e5eb;
  }
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  height: 33px;
`;

export const Icon = styled.svg`
  display: flex;
`;

export const UserPanel = styled.div`
  display: flex;
`;

export const UserInfo = styled.div`
  display: flex;
`;

export const UserName = styled.p`
  display: flex;
  align-items: center;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 1.2;
  color: #242a37;
`;

export const UserAvatar = styled.p`
  background-color: #F5F7FA;
  padding 8px 10px;
  border-radius: 50%;
  margin-right: 12px;
`;

export const ExitButton = styled.button`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: calc(38 / 14);
  border: none;
  background-color: #fff;
  text-decoration-line: underline;
  color: #242a37;

  &:hover {
    color: #f25137;
  }
`;

