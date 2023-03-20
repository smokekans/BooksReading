import styled from 'styled-components';

export const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
  padding: 20px;
  width: 280px;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 768px) {
    padding: 40px;
    width: 608px;
  }
`;

export const StyledList = styled.ul`
  @media screen and (min-width: 320px) {
  }
  & li:not(:last-child) {
    margin-bottom: 20px;
  }
  & .step-text {
    display: flex;
    margin-bottom: 8px;
    font-weight: 600;
    font-size: 14px;
    line-height: 1.21;
    & svg {
      margin-right: 12px;
    }
  }
  & .sup-step-text {
    display: flex;
    align-items: baseline;
    padding-left: 34px;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.21;
    & span {
      display: block;
      width: 10px;
      margin-right: 8px;
    }
  }
`;

export const StyledStepText = styled.p`
  margin-bottom: 8px;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  @media screen and (min-width: 768px) {
    font-size: 19px;
    margin-bottom: 16px;
  }
`;

export const StyledLibButton = styled.button`
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  height: 40px;
  min-width: 127px;
  padding: 0;
  font-size: 14px;
  font-weight: 500;
  color: white;
  background-color: orange;
  border: none;
  outline: 1px solid orange;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  &:hover,
  &:focus {
    color: #242a37;
    background-color: #f6f7fb;
    outline: 1px solid #242a37;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  }
`;
