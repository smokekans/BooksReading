import styled from 'styled-components';
export const WrapperBox = styled.div`
  margin: 0;
  @media (min-width: 1279px) {
    margin: 0 0 0 auto;
    width: 288px;
  }
`;
export const MainWrapper = styled.div`
  width: 280px;
  height: 296px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
  margin-top: 0px;
  align-items: center;
  @media (min-width: 768px) {
    flex-direction: row;
    width: 704px;
    height: 105px;
    padding-left: 28px;
  }
  @media (min-width: 1279px) {
    flex-direction: column;
    width: 288px;
    height: 304px;
    padding: 0;
  }
`;
export const HeaderWrapper = styled.div`
  background-color: #b1b5c2;
  width: 280px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px;
  @media (min-width: 768px) {
    width: 275px;
  }
  @media (min-width: 1279px) {
    width: 288px;
    height: 60px;
  }
`;
export const HeadText = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24.38px;
  color: #ffffff;
  margin: 0;
  padding: 0;
`;
export const Row = styled.div`
  display: flex;
  margin: 44px 30px;
  gap: 20px;
  @media (min-width: 768px) {
    margin-right: 52px;
    margin-left: auto;
    gap: 40px;
    margin-bottom: 8px;
    margin-top: 20px;
  }
  @media (min-width: 1279px) {
    margin: 48px 34px;
    gap: 20px;
  }
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
  text-align: center;
  /* @media (min-width: 768px){
    margin-bottom: 4px;
  } */
`;
export const AmountValueWrapper = styled.div`
  width: 100px;
  height: 100px;
  background: #f5f7fa;
  box-shadow: 4px 4px 8px rgba(36, 42, 55, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    width: 100px;
    height: 60px;
  }
  @media (min-width: 1279px) {
    width: 100px;
    height: 100px;
  }
`;
export const AmountValue = styled.span`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 45px;
  line-height: 38px;
  @media (min-width: 768px) {
    font-size: 40px;
    line-height: 38px;
  }
  @media (min-width: 1279px) {
    font-size: 45px;
    line-height: 38px;
  }
`;

export const Description = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #898f9f;
  margin-top: 14px;
  margin-bottom: 0;

  @media (min-width: 768px) {
    font-size: 11px;
    line-height: 13px;
    margin-top: 4px;
  }
  @media (min-width: 1279px) {
    font-size: 14px;
    margin-top: 14px;
    line-height: 17px;
  }
`;
