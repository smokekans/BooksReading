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
  flex-direction: column;
  height: 100%;

  @media screen and (min-width: 1200px) {
    flex-direction: row;
  }
`;

export const RegisterDiv = styled.div`
  display: flex;
  flex-grow: 1;
  width: 100%;
  height: auto;
  background-image: linear-gradient(
      to left,
      rgba(9, 30, 63, 0.8),
      rgba(9, 30, 63, 0.8)
    ),
    url(${mobileBack});
  background-size: cover;
  justify-content: center;
  align-items: center;
  padding: 32px 20px 44px 20px;
  @media screen and (min-width: 768px) {
    background-image: linear-gradient(
        to left,
        rgba(9, 30, 63, 0.8),
        rgba(9, 30, 63, 0.8)
      ),
      url(${tabletBack});
  }
  @media screen and (min-width: 1200px) {
    width: 550px;
    background-image: linear-gradient(
        to left,
        rgba(9, 30, 63, 0.8),
        rgba(9, 30, 63, 0.8)
      ),
      url(${desktopBack});
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 512px;
  background: transparent;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 609px;
    background: #ffffff;
    padding: 40px;
  }
`;

export const GoogleBtn = styled.button`
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

  color: #ffffff;

  @media screen and (min-width: 768px) {
    font-weight: 500;

    color: #898f9f;
  }
`;

export const Input = styled.input`
  width: 280px;
  height: 42px;
  padding: 8px 0 12px 12px;
  margin-top: 8px;

  background: #f5f7fa;
  border: none;
  box-shadow: inset 0px 1px 2px rgba(29, 29, 27, 0.15);

  @media screen and (min-width: 768px) {
    width: 320px;
    padding: 13px 0 12px 12px;
  }
`;

export const SignInBtn = styled.button`
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

export const LogText = styled.p`
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  text-align: center;

  color: #898f9f;
  margin-top: 20px;
  margin-bottom: 0;
`;

export const LogLink = styled(Link)`
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 13px;
  line-height: calc(16 / 13);
  text-align: center;

  text-decoration-line: underline;

  color: #ff6b08;
`;

export const MainDiv = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @media screen and (min-width: 1200px) {
    flex-grow: 1;
    margin: 0;
  }
`;

export const Title = styled.p`
  font-family: 'Abril Fatface';
  font-size: 34px;
  line-height: calc(38 / 34);
  margin: 0;
  text-align: center;

  color: #242a37;

  @media screen and (min-width: 768px) and (max-width: 1200px) {
    margin-top: 64px;
  }
`;

export const UlTitle = styled.p`
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 20px;
  line-height: calc(38 / 20);
  margin: 48px 0 0 0;
  text-align: start;

  color: #242a37;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1200px) {
  }
`;

export const UlTitleSecond = styled.p`
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 20px;
  line-height: calc(38 / 20);
  margin: 0;
  margin-top: 32px;

  color: #242a37;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1200px) {
  }
`;

export const LiStyled = styled.li`
  display: flex;
  gap: 12px;
  align-items: center;
  margin: 12px 0 0 0;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1200px) {
  }
`;

export const LiText = styled.p`
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 14px;
  line-height: calc(17 / 14);
  margin: 0;

  color: #898f9f;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1200px) {
  }
`;
