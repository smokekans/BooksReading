import styled from 'styled-components';

export const Wraper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
  }
  @media screen and (min-width: 1280px) {
    flex-wrap: nowrap;
  }
`;