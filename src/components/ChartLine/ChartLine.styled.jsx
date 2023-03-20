import styled from 'styled-components';

export const ChartSectionBox = styled.div`
  width: 280px;
  min-height: 290px;

  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0;
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.25);
  @media screen and (min-width: 768px) {
    width: 704px;
    min-height: 340px;
  }
  @media screen and (min-width: 1280px) {
    width: 928px;
    max-height: 340px;
  }
`;

export const ChartInfoBox = styled.div`
  margin-top: 25px;
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    margin-right: auto;
    margin-left: 50px;
    margin-top: 35px;
  }
`;

export const ChartBox = styled.div`
  position: relative;
  width: 236px;
  min-height: 290px;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    width: 607px;
    height: 215px;
  }
  @media screen and (min-width: 1280px) {
    width: 811px;
  }
`;

export const AxisSignatureBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitleLineBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    margin-left: 60px;
  }
  @media screen and (min-width: 1280px) {
    margin-left: 150px;
  }
`;

export const AmountText = styled.p`
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 12px;
  line-height: 1.25;
  text-transform: uppercase;
  color: #242a37;
  margin: 0 8px 0 0;
`;

export const AmountValue = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 25px;
  min-height: 25px;
  background-color: #f5f7fa;
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 12px;
  color: #242a37;
  margin: 0;
`;

export const TitleLineValue = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 30px;
  min-width: 50px;
  background: #f5f7fa;
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
  line-height: 1.25;
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 12px;
  text-transform: uppercase;

  color: #091e3f;
`;
