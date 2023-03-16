import styled from 'styled-components';

export const Container = styled.section`

`

export const ButtonSvgBack = styled.button`
  border: none;
  background: #f6f7fb;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const FormAll = styled.form`
  display: flex;
  flex-direction: column;
@media screen and (min-width: 1280px){
  flex-direction: row;
  justify-content: space-between;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  & .input-second {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  @media screen and (min-width: 768px) {
    // padding: 32px;
    width: 704px;
    flex-wrap: wrap;
    gap: 24px;
    & .input-second {
      flex-direction: row;
      gap: 32px;
    }
    & .title {
      width: 704px;
    }
    & .author {
      width: 336px;
    }
    & .small-input {
      width: 152px;
    }
  }
  @media screen and (min-width: 1280px) {
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 16px;
    & .title {
      width: 346px;
    }
    & .author {
      width: 250px;
    }
    & .small-input {
      width: 132px;
    }
    & .input-second {
      gap: 16px;
    }
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  color: #898f9f;
  line-height: 1.21;
`;

export const Input = styled.input`
  height: 42px;
  padding: 12px;
  border: 1px solid #a6abb9;
  background: #f6f7fb;
  :focus {
    background: white;
  }
`;

export const Button = styled.button`
  width: 171px;
  height: 42px;
  display: block;
  margin-right: auto;
  margin-left: auto;
  margin-top: 20px;
  background: #f6f7fb;
  border: 1px solid #242a37;
  :hover {
    border: 1px solid #ff6b08;
  }
  @media screen and (min-width: 1280px) {
    margin-left: 32px;
    margin-right: 123px;
  }
`;
