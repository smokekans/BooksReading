import styled from 'styled-components';
import device from 'hooks/device';

export const Text = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: calc(22 / 16);
  text-align: center;
  color: #242a37;
  margin-bottom: 20px;
  
  @media screen and ${device.tablet} {
    margin-bottom: 24px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`;

export const Button = styled.button`
  width: 97px;
  padding: 12px 20px;
  border: 1px solid #242a37;
  background-color: #fff;

  @media screen and ${device.tablet} {
   width: 130px;
  }
`;

export const ButtonExit = styled.button`
  width: 97px;
  padding: 12px 20px;
  color: #fff;
  border: none;
  background-color: #ff6b08;

  @media screen and ${device.tablet} {
   width: 130px;
  }
`;
