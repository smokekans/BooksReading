import useMatchMedia from 'hooks/useMatchMedia';
import React from 'react';
import { StyledBox, StyledLibButton, StyledList, StyledStepText } from './EmptyLibrary.styled';
import { ReactComponent as BookIcon } from '../EmptyLibrary/svg/bookIconGrey.svg';
import { ReactComponent as ArrowIcon } from '../EmptyLibrary/svg/arrow.svg';
import { ReactComponent as FlagIcon } from '../EmptyLibrary/svg/flag.svg';

export const EmptyLibrary = () => {
  const { isMobile } = useMatchMedia();
  return (
    <>
      <StyledBox>
        <StyledList>
          <li>
            <StyledStepText>Крок 1.</StyledStepText>
            <p className="step-text">
              <BookIcon />
              Створіть особисту бібліотеку
            </p>

            <p className="sup-step-text">
              <ArrowIcon width={10} height={12} />
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
              <ArrowIcon width={10} height={12} />
              Визначте ціль, оберіть період, розпочинайте тренування.
            </p>
          </li>
        </StyledList>
        {isMobile && <StyledLibButton type="button">Ok</StyledLibButton>}
      </StyledBox>
    </>
  );
};
