import styled from 'styled-components';

export const BoxGoal = styled.section`
  margin-top: 20px;
  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
  @media screen and (min-width: 1280px) {
    margin-left: 0;
    margin-top: 0;
  }
`;

export const TitleStl = styled.h2`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 52px;
  text-align: center;
  color: #ffffff;
  @media screen and (min-width: 768px) {
    line-height: 30px;
  }
  @media screen and (min-width: 1280px) {
    line-height: 52px;
  }
`;

export const WrapStl = styled.div`
  width: auto;
  height: 60px;
  background: #b1b5c2;
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
  @media screen and (min-width: 768px) {
    width: 275px;
    margin-bottom: 9px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media screen and (min-width: 1280px) {
    width: 290px;
    margin-left: 0px;
  }
`;

export const WraperStl = styled.div`
  width: 280px;
  height: 221px;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
  @media screen and (min-width: 768px) {
    width: 704px;
    height: 125px;
    padding: 20px 42px 28px;
    margin-left: 32px;
    display: flex;
    gap: 20px;
  }
  @media screen and (min-width: 1280px) {
    display: block;
    width: 290px;
    height: 329px;
    margin-left: 0px;
    padding: 0;
    gap: 0;
  }
`;

export const ListStl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  @media screen and (min-width: 768px) {
    gap: 12px;
  }
  @media screen and (min-width: 1280px) {
    gap: 18px;
    margin-top: 80px;
    padding: 0 18px;
  }
`;

export const СolonStl = styled.span`
  height: 38px;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 38px;
  text-align: center;
  color: #091e3f;
  width: 66px;
  @media screen and (min-width: 768px) {
    width: 100px;
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const AccentStl = styled.span`
  height: 38px;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 38px;
  text-align: center;
  color: #ff6b08;
  width: 66px;
  @media screen and (min-width: 768px) {
    width: 100px;
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const LabelStl = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 15px;
  text-align: center;
  justify-items: flex-end;
  color: #898f9f;
  height: 30px;
  width: 66px;
  @media screen and (min-width: 768px) {
    width: 100%;
    font-size: 11px;
    padding-top: 4px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 12px;
  }
`;

export const BoxStl = styled.div`
  width: 66px;
  height: 66px;
  margin-top: 32px;
  background: #f5f7fa;
  box-shadow: 4px 4px 8px rgba(36, 42, 55, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
    width: 100px;
    height: 60px;
  }
  @media screen and (min-width: 1280px) {
    width: 66px;
    height: 66px;
    margin-top: 0px;
  }
`;
