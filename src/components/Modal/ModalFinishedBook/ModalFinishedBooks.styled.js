import styled from 'styled-components';

export const OverlayModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(43, 43, 43, 0.1);
  z-index: 1200;
`;

export const ModalFinish = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 40px 26px;
  width: 280px;
  height: 256px;
  background: #ffffff;
  box-shadow: 10px 10px 20px rgba(9, 30, 63, 0.2);

  @media screen and (min-width: 768px) {
    padding: 40px 83px;
    width: 394px;
    height: 256px;
  }
`;

export const MessageSuccess = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #242a37;
`;

export const DoneBtn = styled.button`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #ffffff;

  width: 130px;
  height: 40px;
  background-color: #ff6b08;
  border: none;

  &:hover {
    background-color: #ffffff;
    color: #ff6b08;
    border: 1px solid #ff6b08;
  }
`;
