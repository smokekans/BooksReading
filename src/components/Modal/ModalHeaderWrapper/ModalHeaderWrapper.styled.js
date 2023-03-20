import styled from 'styled-components';
import device from 'hooks/device';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #4343439d;
`;

const chooseModalVariant = variant => {
  switch (variant) {
    case 'input':
      return `
                padding: 20px 20px 40px;
                line-height: 1.25;
                @media screen and ${device.mobile} {
                    width: 300px;
                }
                @media screen and ${device.tablet} {
                    width: 608px;
                }
            `;
    case 'info':
    default:
      return `
                width: 280px;
                padding: 48px 24px;
                text-align: center;
                line-height: 1.38;
                @media screen and ${device.tablet} {
                  width: 394px;
                }
            `;
  }
};

export const ModalContainer = styled.div`
  ${({ variant }) => chooseModalVariant(variant)};
  background-color: #fff;
  box-shadow: 10px 10px 20px rgba(9, 30, 63, 0.2);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  & button {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
    @media screen and (min-width: 768px) {
      font-size: 14px;
    }
  }
`;

export const ModalContent = styled.div`
  font-weight: 500;
  font-size: 16px;
  margin: 0 auto;
`;
