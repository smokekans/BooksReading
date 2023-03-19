import styled from 'styled-components';

export const BoxGoal = styled.section`
  margin-top: 36px;
  @media screen and (min-width: 768px) {
    margin-top: 36px;
  }
  @media screen and (min-width: 1280px) {
    margin-left: 169px;
    margin-top: 20px;
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
  /* width: 280px; */
  height: 60px;
  background: #b1b5c2;
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
  @media screen and (min-width: 768px) {
    width: 275px;
    /* margin-left: 42px; */
    /* margin-right: 20px; */
    /* margin-top: 20px; */
  }
  @media screen and (min-width: 1280px) {
    width: 290px;
    margin-left: 0px;
    /* padding-left:18px; */
  }
`;

export const WraperStl = styled.div`
  width: 280px;
  height: 221px;
    align-items: center;
  justify-content: center;

  /* padding: 80px 18px 79px; */

  background: #ffffff;
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
  @media screen and (min-width: 768px) {
    width: 704px;
    height: 125px;
    padding: 20px 42px 28px;
    /* align-items: baseline; */
    margin-left: 32px;
    display: flex;
  }
  @media screen and (min-width: 1280px) {
    width: 290px;
    height: 329px;
    /* padding: 80px 18px 79px; */
    margin-left: 0px;
    padding: 0;
    /* padding-left:18px; */
    /* margin-top:20px; */
    display: block;
  }
`;

export const ListStl = styled.ul`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 0 18px;
  @media screen and (min-width: 768px) {
    /* margin-top:20px; */
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
`;

export const LabelStl = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  justify-items: flex-end;
  color: #898f9f;
  height: 30px;
  @media screen and (min-width: 768px) {
    font-size: 11px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 12px;
  }
`;

export const BoxStl = styled.div`
  width: 66px;
  height: 66px;
  margin-top: 32px;
  /* margin-left:29px; */
  background: #f5f7fa;
  box-shadow: 4px 4px 8px rgba(36, 42, 55, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
    width: 100px;
    height: 60px;
    /* margin-top: 20px; */
    /* padding: 20px 42px 28px; */
  }
  @media screen and (min-width: 1280px) {
    width: 66px;
    height: 66px;
    margin-top: 0px;
    /* margin-left:16px; */
  }
`;
