import styled from 'styled-components';
export const MainWrapper = styled.div`
  width: 280px;
  height: 296px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
  margin-top: 0px;
  align-items: center;
  @media (min-width: 768px) and (max-width: 1279px) {
    flex-direction: row;
    width: 704px;
    height: 105px;
  }
`;
export const HeaderWrapper = styled.div`
  background-color: #b1b5c2;
  width: 280px;
  height: 60px;
  text-align: center;
  padding-top: 0px;
  margin-top: 0px;
  padding-top: 18px;
  @media (min-width: 768px) and (max-width: 1279px) {
    width: 704px;
    margin-right: 109px;
    margin-left: 28px;
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
export const AmountValueWrapper = styled.div`
  width: 100px;
  height: 100px;
  background: #f5f7fa;
  display: block;
  box-shadow: 4px 4px 8px rgba(36, 42, 55, 0.15);
  margin-bottom: 14px;
  margin-top: 20px;
  justify-content: center;
  padding-top: 30px;
  @media (min-width: 768px) {
    margin-bottom: 5px;
    width: 100px;
    height: 60px;
    padding-top: 7px;
  }
`;
export const AmountValue = styled.span`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 45px;
  line-height: 38px;
`;
export const WrapperBox = styled.div`
  margin-top: 20px;
  @media (min-width: 1279px) {
    margin-left: 32px;
    margin-top: 20px;
  }
`;
export const Description = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #898f9f;
  @media (min-width: 768px) {
    font-size: 11px;
  }
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
  margin-left: 10px;
  margin-right: 10px;
  text-align: center;
`;
