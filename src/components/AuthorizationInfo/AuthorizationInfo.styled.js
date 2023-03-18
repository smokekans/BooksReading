import styled from 'styled-components';
import { Link } from 'react-router-dom';



export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.p`
  font-family: 'Abril Fatface';
  font-size: 34px;
  line-height: calc(38 / 34);
  margin: 0;
  text-align: center;

  color: #242a37;
`;

export const Box = styled.div``;

export const UlTitle = styled.p`
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 20px;
  line-height: calc(38 / 20);
  margin: 24px 0;

  color: #242a37;
`;

export const UlStyled = styled.ul`
width: 270px;
  gap: 12px;
  align-items: center;
  margin: 12px 0 0 0;
`;

export const LiStyled = styled.li`
  display: flex;
  gap: 12px;
  align-items: center;
  margin: 12px 0 0 0;
`;

export const LiText = styled.p`
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 14px;
  line-height: calc(17 / 14);
  margin: 0;

  color: #898f9f;
`;

export const LogLink = styled(Link)`
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  margin-top: 20px;

  text-decoration-line: underline;

  color: #ff6b08;
`;

export const BoxBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const LogInBtn = styled.button`
  width: 130px;
  height: 40px;
  margin-top: 60px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: calc(20 / 16);
  border: 1px solid #000;

  text-align: center;
  background: transparent;
  color: #000;
  cursor: pointer;
`;

export const RegLink = styled(Link)`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  margin-top: 20px;

  text-decoration-line: underline;

  color: #ff6b08;
`;

export const SignInBtn = styled.button`
  width: 130px;
  height: 40px;
  margin-top: 60px;

  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 16px;
  line-height: calc(20 / 16);
  border: none;

  text-align: center;
  background: #ff6b08;
  color: #ffffff;
  cursor: pointer;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`;