import styled from 'styled-components';

export const Wraper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }
  @media screen and (min-width: 1280px) {
    flex-wrap: nowrap;
    align-items: flex-start;
    /* padding: 0; */
  }
`;

export const StatsWrapp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  @media screen and (min-width: 768px) {
    gap: 36px;
  }
  @media screen and (min-width: 1280px) {
    flex-direction: row;
    gap: 32px;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
  }
`;
