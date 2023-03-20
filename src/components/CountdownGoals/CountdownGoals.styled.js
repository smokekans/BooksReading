import styled from 'styled-components';

export const TimerStl = styled.section`
  display: flex;
  flex: column;
  align-items: flex-end;
  justify-content: center;
  background: #ffffff;
  box-shadow: 4px 4px 8px rgba(36, 42, 55, 0.15);
  width: 280px;
  height: 60px;
  @media screen and (min-width: 768px) {
    width: 290px;
  }
`;

export const LaybelStl = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  text-align: center;

  color: #898f9f;
`;

export const TimeStl = styled.p`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 38px;
  height: 12px;

  color: #091e3f;
`;

export const СolonStl = styled.p`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 38px;

  color: #091e3f;
  margin-right: 10px;
  margin-left: 10px;
`;

export const TitleStl = styled.h2`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;

  text-align: center;

  color: #898f9f;
  margin-top: 24px;
  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
`;
