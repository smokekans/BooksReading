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