import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
 padding: 0 16px;
 position: relative;
`;

export const HeaderStyled = styled.header`
   background-color: #FFFFFF;
   padding: 16px 0;
   box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
`;

export const Logo = styled.p`
   width: max-content;
   margin: 0;
   font-size: 20px;
   line-height: 1.35;
   color: #242A37;
`;

export const HeaderWrapper = styled.div`
   display: flex;
   align-items: center;
`;

export const Nav = styled.nav`
   margin-left: auto;
`;

export const NavList = styled.ul`
   display: flex;
   align-items: center;
   padding-right: 7px;
   border-right: 1px solid #e0e5eb;
`;

export const NavItem = styled.li`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 33px;
   height: 33px;
   border-radius: 50%;
   transition: background 150ms linear;
   
   &:hover {
      background-color: #f5f7fa;
   }
`;

export const Link = styled(NavLink)`
    fill: #A6ABB9;
    transition: all 300ms linear;
    position: relative;
    &:after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 50%;
        width: 28px;
        border-top: 3px solid #F5F7FA;
        border-radius: 3px 3px 0 0;
        transition: all 300ms linear;
        opacity: 0;
        transform: translateX(-50%) scaleX(0);
    }
    &.active {
        fill: #F5F7FA;
        &:after {
            opacity: 1;
            transform: translateX(-50%) scaleX(1);
        }
    }
`;

export const Icon = styled.svg`
    display: flex;
`;

export const UserPanel = styled.div`
    display: flex;
    padding-left: 14px;
`;

export const UserInfo = styled.div`
        display: flex;
        align-items: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
`;

export const UserName = styled.p`
    display: none;
`;

export const UserAvatar = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 14px;
    font-weight: 600;
    font-size: 14px;
    line-height: 1.2;
    color: #242A37;
    width: 33px;
    height: 33px;
    border: 0;
    border-radius: 50%;
    background-color: #f5f7fa;
    cursor: default;
`;

export const ExitButton = styled.button`
    color: #242A37;
    &::after {
        content: '';
        display: block;
        width: 0;
        height: 1px;
        background-color: #242A37;
        transition: width 0.3s;
    }
    &:hover::after {
        width: 100%;
        transition: width 250ms;
    }
`;