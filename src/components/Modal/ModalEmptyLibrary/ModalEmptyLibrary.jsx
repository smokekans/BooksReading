import useMatchMedia from 'hooks/useMatchMedia';
import React from 'react';
import { StyledBox, StyledLibButton, StyledList, StyledStepText } from './ModalEmptyLibrary.styled';
import { ReactComponent as BookIcon } from '../ModalEmptyLibrary/svg/bookIconGrey.svg';
import { ReactComponent as ArrowIcon } from '../ModalEmptyLibrary/svg/arrow.svg';
import { ReactComponent as FlagIcon } from '../ModalEmptyLibrary/svg/flag.svg';

export const ModalEmptyLibrary = ({ isEmptyLibrary, onClick }) => {
  const { isMobile } = useMatchMedia();
  return (
    <>
      {!isEmptyLibrary && (
        <StyledBox>
          <StyledList>
            <li>
              <StyledStepText>Крок 1.</StyledStepText>
              <p className="step-text">
                <BookIcon />
                Створіть особисту бібліотеку
              </p>

              <p className="sup-step-text">
                {' '}
                <span>
                  {' '}
                  <ArrowIcon width={10} height={12} />
                </span>
                Додайте до неї книжки, які маєте намір прочитати.
              </p>
            </li>
            <li>
              <StyledStepText>Крок 2.</StyledStepText>
              <p className="step-text">
                <FlagIcon />
                Сформуйте своє перше тренування
              </p>

              <p className="sup-step-text">
                {' '}
                <span>
                  <ArrowIcon width={10} height={12} />
                </span>
                Визначте ціль, оберіть період, розпочинайте тренування.
              </p>
            </li>
          </StyledList>
          {isMobile && (
            <StyledLibButton type="button" onClick={() => onClick(true)}>
              Ok
            </StyledLibButton>
          )}
        </StyledBox>
      )}
    </>
  );
};
