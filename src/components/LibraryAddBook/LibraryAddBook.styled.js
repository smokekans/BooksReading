import styled from 'styled-components';

export const Container = styled.section`
  padding-bottom: 20px;
  @media screen and (min-width: 768px) {
    padding-bottom: 32px;
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding-bottom: 40px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const FormAll = styled.form`
  display: flex;
  flex-direction: column;
@media screen and (min-width: 768px) {
  align-items: center;
};
@media screen and (min-width: 1280px){
  width: 100%;
  flex-direction: row;
  gap: 48px;
  // justify-content: space-between;
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
    // gap: 16px;
    width: 100%;
    & .title {
      width: 346px;
    }
    & .author {
      width: 250px;
    }
    & .small-input {
      width: 134px;
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
    border: none;
    box-shadow: inset 0px 1px 2px rgba(29, 29, 27, 0.15);
  }
`;

export const Button = styled.button`
  width: 171px;
  height: 42px;
  display: block;
  margin-right: auto;
  margin-left: auto;
  margin-top: 40px;
  background: #f6f7fb;
  border: 1px solid #242a37;
  :hover {
    border: 1px solid #ff6b08;
  }
  @media screen and (min-width: 1280px) {
    margin: 23px 99px 0px 0px;
    width: 100%;
  }
`;
