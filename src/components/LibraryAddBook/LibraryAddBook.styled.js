import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  gap: 16px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  color: #898f9f;
  line-height: 17.07px;
`;

export const Input = styled.input`
  height: 17px;
  padding: 12px;
  border: 1px solid #a6abb9;
  background: #f6f7fb;
  :focus {
    background: white;
  }
`;
