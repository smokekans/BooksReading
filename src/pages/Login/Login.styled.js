import { Link } from 'react-router-dom';
import styled from 'styled-components';
import desktopBack from '../../images/backgroundDesktop.png';
import mobileBack from '../../images/backgroundMobile.png';
import tabletBack from '../../images/backgroundTablet.png';

export const Orange = styled.span`
  color: #f25137;
`;

export const Container = styled.div`
  display: flex;
  height: 100%;
  @media screen and (min-width: 320px) {
    flex-direction: column;
  }

  @media screen and (min-width: 1200px) {
    flex-direction: row;
  }
`;

export const LoginDiv = styled.div`
  display: flex;
  width: 100%;
  height: 394px;
  background-image: linear-gradient(
      to left,
      rgba(9, 30, 63, 0.8),
      rgba(9, 30, 63, 0.8)
    ),
    url(${mobileBack});
  background-size: cover;
  justify-content: center;
  align-items: center;
  padding: 32px 20px;

  @media screen and (min-width: 768px) {
    display: flex;
    width: 100%;
    height: 559px;
    background-image: linear-gradient(
        to left,
        rgba(9, 30, 63, 0.8),
        rgba(9, 30, 63, 0.8)
      ),
      url(${tabletBack});
    padding: 0;
  }
  @media screen and (min-width: 1200px) {
    width: 550px;
    height: auto;
    background-image: linear-gradient(
        to left,
        rgba(9, 30, 63, 0.8),
        rgba(9, 30, 63, 0.8)
      ),
      url(${desktopBack});
    padding: 0;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 334px;
  background: transparent;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 400px;
    height: 430px;
    background: #ffffff;
    padding: 40px;
  }
  @media screen and (min-width: 1200px) {
    width: 400px;
    height: 430px;
    background: #ffffff;
    padding: 40px;
  }
`;

export const GoogleBtn = styled.a`
  display: flex;
  width: 150px;
  height: 40px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  gap: 16px;

  background: #f5f7fa;
  box-shadow: 0px 2px 2px rgba(9, 30, 63, 0.15);
  border: none;

  font-weight: 700;
  font-size: 16px;
  line-height: calc(38 / 16);

  text-align: center;

  color: #707375;
`;

export const Label = styled.label`
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 14px;
  line-height: calc(17 / 14);
  margin-top: 28px;
  margin-right: auto;

  color: #ffffff;

  @media screen and (min-width: 768px) {
    font-weight: 500;
    color: #898f9f;
  }
`;

export const Input = styled.input`
  width: 280px;
  height: 42px;
  padding: 13px 0 12px 8px;
  margin-top: 8px;

  background: #f5f7fa;
  border: none;
  box-shadow: inset 0px 1px 2px rgba(29, 29, 27, 0.15);

  @media screen and (min-width: 768px) {
    width: 320px;
    padding: 13px 0 12px 12px;
  }
`;

export const LogInBtn = styled.button`
  width: 280px;
  height: 60px;
  margin-top: 20px;

  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 16px;
  line-height: calc(20 / 16);
  border: none;

  text-align: center;
  background: #ff6b08;
  color: #ffffff;
  @media screen and (min-width: 768px) {
    width: 320px;
    margin-top: 32px;
  }
`;

export const RegLink = styled(Link)`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: calc(16 / 13);
  text-align: center;
  margin-top: 16px;

  text-decoration-line: underline;

  color: #ff6b08;

  @media screen and (min-width: 768px) {
    margin-top: 20;
  }
`;

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 1200px) {
    flex-grow: 1;
  }
`;

export const Quotes = styled.p`
  font-family: 'Abril Fatface';
  font-size: 59px;
  line-height: calc(59 / 72);
  margin: 35px 0 -25px;
  transform: scale(-1, -1);
  text-align: center;
  color: #ff6b08;

  @media screen and (min-width: 768px) {
    font-size: 69px;
    line-height: 0.8;
    margin: 80px 0 -25px 0;
  }
`;

export const MainText = styled.p`
  width: 229px;
  margin: 0;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: calc(16 / 13);

  text-align: center;

  color: #242a37;

  @media screen and (min-width: 768px) {
    width: 526px;

    font-weight: 500;
    font-size: 24px;
    line-height: calc(38 / 24);
  }

  @media screen and (min-width: 1200px) {
    width: 397px;

    font-weight: 500;
    font-size: 24px;
    line-height: calc(40 / 24);
  }
`;

export const Stick = styled.span`
  width: 100px;
  height: 0px;
  border: 1px solid rgba(36, 42, 55, 0.5);
  margin-top: 16px;

  @media screen and (min-width: 768px) {
    margin-top: 20px;
    width: 150px;
  }
`;

export const AddText = styled.p`
  margin: 0;
  margin-top: 12px;
  margin-bottom: 30px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: calc(17 / 14);
  text-align: center;

  color: #898f9f;

  @media screen and (min-width: 768px) {
    margin: 12px 0 60px;
    width: 397px;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: calc(24 / 20);
    text-align: center;

    color: #898f9f;
  }
`;
