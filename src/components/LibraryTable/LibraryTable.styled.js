import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.section`
  padding: 20px;
  @media screen and (min-width: 768px) {
    padding: 32px;
  };
  @media screen and (min-width: 1280px){
    width: 1280px;
    padding: 40px 16px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const TitleH2 = styled.h2`
  font-weight: 600;
  font-size: 19px;
  line-height: 23px;
  color: #242a37;
  margin-bottom: 24px;
`;

export const Table = styled.table`
  width: 100%;
  background: #ffffff;
  margin-bottom: 32px;
  text-align: left;
  background: #f6f7fb;
  border-spacing: 0px 5px;
`;

export const Tr = styled.tr`
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
  background-color: white;
  height: 62px;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #242a37;
`;

export const TrHead = styled.tr`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #898f9f;
`;

export const EmptyPageDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  color: #898f9f;
  line-height: 1.21;
  margin-top: 20px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const NavLinkMore = styled(NavLink)`
position: fixed;
bottom: 12px;
left: 48%;
z-index: 999;
@media screen and (min-width: 768px) {
    display: none;
  }
`
