import useMatchMedia from 'hooks/useMatchMedia';
import React from 'react';
import {
  StyledBox,
  StyledLibButton,
  StyledList,
  StyledStepText,
} from './ModalEmptyLibrary.styled';
import { ReactComponent as BookIcon } from '../ModalEmptyLibrary/svg/bookIconGrey.svg';
import { ReactComponent as ArrowIcon } from '../ModalEmptyLibrary/svg/arrow.svg';
import { ReactComponent as FlagIcon } from '../ModalEmptyLibrary/svg/flag.svg';
import { useSelector } from 'react-redux';
import { getLanguage } from 'redux/language/languageSelectors';
import { langModalEmptyLibrary } from 'languages/langModalEmptyLibrary';

export const ModalEmptyLibrary = ({ isEmptyLibrary, onClick }) => {
  const { isMobile } = useMatchMedia();
  const lang = useSelector(getLanguage);
  const { step, paragraf1, paragraf2, paragraf3, paragraf4 } =
    langModalEmptyLibrary;

  return (
    <>
      {!isEmptyLibrary && (
        <StyledBox>
          <StyledList>
            <li>
              <StyledStepText>{step[lang]} 1.</StyledStepText>
              <p className="step-text">
                <BookIcon />
                {paragraf1[lang]}
              </p>

              <p className="sup-step-text">
                {' '}
                <span>
                  {' '}
                  <ArrowIcon width={10} height={12} />
                </span>
                {paragraf2[lang]}
              </p>
            </li>
            <li>
              <StyledStepText>{step[lang]} 2.</StyledStepText>
              <p className="step-text">
                <FlagIcon />
                {paragraf3[lang]}
              </p>

              <p className="sup-step-text">
                {' '}
                <span>
                  <ArrowIcon width={10} height={12} />
                </span>
                {paragraf4[lang]}
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
