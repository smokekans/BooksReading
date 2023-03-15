import styled from 'styled-components';

export const StatWrap = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 238px;
    margin-bottom: 4px;
  }
`;

export const StatList = styled.ul`
  @media screen and (min-width: 1280px) {
    height: 100px;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      width: 5px;
    }

    &::-webkit-scrollbar-track {
      background: rgba(177, 181, 194, 0.25);
    }

    &::-webkit-scrollbar-thumb {
      background-color: #b1b5c2;
    }
  }
`;

export const StatTitle = styled.h3`
  margin: 0 0 4px 0;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  text-transform: uppercase;
  color: #242a37;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    font-size: 14px;
    line-height: 17px;
    text-align: start;
    margin: 0 0 6px 0;
  }

  @media screen and (max-width: 767px) {
    &::before {
      margin: 4px 4px 4px 0;
      content: '';
      display: inline-block;
      width: 71px;
      border: 1px solid #e0e5eb;
    }
  }

  @media screen and (min-width: 1279px) {
    &::before {
      margin: 4px 4px 4px 0;
      content: '';
      display: inline-block;
      width: 71px;
      border: 1px solid #e0e5eb;
    }
  }

  &::after {
    margin: 4px 0 4px 4px;
    content: '';
    display: inline-block;
    width: 71px;
    border: 1px solid #e0e5eb;
    @media screen and (min-width: 768px) and (max-width: 1279px) {
      margin: 4px 0 4px 6px;
      width: 128px;
    }
    @media screen and (min-width: 1280px) {
      width: 67px;
    }
  }
`;

export const StatItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
`;

export const StatDate = styled.p`
  margin: 0;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  text-transform: uppercase;
  color: #242a37;
`;
export const StatTime = styled.p`
  margin: 0;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-transform: uppercase;
  color: #898f9f;
`;

export const StatPages = styled.p`
  margin: 0;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  text-transform: uppercase;
  color: #242a37;
`;

export const StatPage = styled.span`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-transform: lowercase;
  color: #898f9f;
`;
