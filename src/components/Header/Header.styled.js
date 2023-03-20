import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderWrapper = styled.div`
  position: relative;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
  background-color: #fff;

  @media screen and (min-width: 768px) {
    padding: 0 32px;
  }

  @media screen and (min-width: 1280px) {
    padding: 0 16px;
  }
`;

export const Logo = styled.p`
  height: 60px;
  justify-content: center;
  align-items: center;
  display: flex;
  font-family: 'Abril Fatface';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: calc(27 / 20);
  margin: 0;
`;

export const Nav = styled.nav`
  display: flex;
`;

export const NavList = styled.ul`
  display: flex;
  margin-right: 10px;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    margin-right: 20px;
  }
`;

export const NavItem = styled.li`
  display: flex;
  &:first-child {
    margin-right: 6px;
  }

  &:last-child {
    padding-right: 6px;
    border-right: 1px solid #e0e5eb;
  }

  @media screen and (min-width: 768px) {
    margin-right: 13px;
  }
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 33px;
  width: 33px;
  &:hover,
  &:active {
    background-color: #f5f7fa;
    border-radius: 50%;
  }
`;

export const Icon = styled.svg`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserPanel = styled.div`
  display: flex;
`;

export const UserInfo = styled.div`
  display: flex;
  margin: auto;

  @media screen and (min-width: 768px) {
    margin: 0;
    position: absolute;
    top: 10px;
    left: 46%;
  }
`;

export const UserName = styled.p`
  display: none;
  align-items: center;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  /* line-height: calc(17 / 14); */
  color: #242a37;

  @media screen and (min-width: 768px) {
    display: flex;
    margin: 0;
    margin-top: -2px;
    margin-left: 10px;
  }

  @media screen and (min-width: 768px) {
    line-height: calc(38 / 14);
  }
`;

export const UserAvatar = styled.p`
  background-color: #f5f7fa;
  padding: 8px 10px;
  border-radius: 50%;
  margin: auto;

  @media screen and (min-width: 320px) {
    margin: auto;
  }
  @media screen and (min-width: 768px) {
    margin: 0;
  }
`;

export const ExitButton = styled.button`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: calc(17 / 14);
  border: none;
  background-color: #fff;
  text-decoration-line: underline;
  color: #242a37;

  &:hover {
    color: #f25137;
  }

  @media screen and (min-width: 1280px) {
    line-height: calc(38 / 14);
  }
`;
