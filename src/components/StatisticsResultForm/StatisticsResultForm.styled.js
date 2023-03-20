import styled from 'styled-components';

export const ResultTitle = styled.h3`
  margin: 0 0 12px 0;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  text-transform: uppercase;
  color: #242a37;
  @media screen and (min-width: 768px) {
    margin: 0 0 28px 0;
  }
  @media screen and (min-width: 1280px) {
    margin: 0 0 12px 0;
  }
`;

export const ResultBox = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 28px;
  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 28px;
  }
`;

export const DataBox = styled.div``;
export const PageBox = styled.div``;

export const FormRes = styled.form`
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    display: flex;
    align-items: center;
  }
`;

export const LabelDate = styled.p`
  margin: 0;
  margin-bottom: 4px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 13px;
  color: #898f9f;
`;

export const LabelPages = styled.p`
  margin: 0;
  margin-bottom: 4px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 13px;
  color: #898f9f;
`;

export const InputPages = styled.input`
  padding: 12px;
  width: 110px;
  height: 42px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #242a37;
  background-color: #f6f7fb;
  border: 1px solid #a6abb9;
`;

export const ResultBtn = styled.button`
  margin-bottom: 24px;
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  width: 240px;
  height: 40px;
  text-align: center;
  background-color: #ff6b08;
  color: #ffffff;
  border: none;

  &:hover {
    background-color: #ffffff;
    color: #ff6b08;
    border: 1px solid #ff6b08;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    margin-left: 32px;
    margin-bottom: 3px;
    height: 42px;
  }
`;

export const ErrorMessage = styled.div`
  position: absolute;
  margin-top: 4px;
  margin-bottom: 4px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  color: red;
`;
