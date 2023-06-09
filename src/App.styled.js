import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 20px;
  margin: 0 auto;

  @media screen and (min-width: 480px) {
    width: 480px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 32px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding: 40px 16px;
    margin-left: auto;
    margin-right: auto;
  }
`;
