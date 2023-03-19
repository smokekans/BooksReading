import { useSelector } from 'react-redux';
import {
  MainDiv,
  Box,
  BoxBtn,
  LiStyled,
  LiText,
  LogLink,
  RegLink,
  LogInBtn,
  SignInBtn,
  Title,
  UlStyled,
  UlTitle,
} from './AuthorizationInfo.styled';
import { ReactComponent as ArrowIcon } from '../../images/arrow.svg';
import { getLanguage } from 'redux/language/languageSelectors';
import { langAuthorizationInfo } from 'languages/langAuthorizationInfo';

export const AuthorizationInfo = () => {
  const lang = useSelector(getLanguage);
  const {
    helpyou,
    paragraf1,
    paragraf2,
    paragraf3,
    paragraf4,
    paragraf5,
    paragraf6,
    paragraf7,
    sign,
    registr,
  } = langAuthorizationInfo;

  return (
    <>
      <MainDiv>
        <Title>Books Reading</Title>
        <Box>
          <UlStyled>
            <UlTitle>{helpyou[lang]}</UlTitle>
            <LiStyled>
              <ArrowIcon />
              <LiText>{paragraf1[lang]}</LiText>
            </LiStyled>
            <LiStyled>
              <ArrowIcon />
              <LiText>
                {paragraf2[lang]}
              </LiText>
            </LiStyled>
            <LiStyled>
              <ArrowIcon />
              <LiText>{paragraf3[lang]}</LiText>
            </LiStyled>
          </UlStyled>
          <UlStyled>
            <UlTitle>{paragraf4[lang]} </UlTitle>
            <LiStyled>
              <ArrowIcon />
              <LiText>{paragraf5[lang]}</LiText>
            </LiStyled>
            <LiStyled>
              <ArrowIcon />
              <LiText>
                {paragraf6[lang]}
              </LiText>
            </LiStyled>
            <LiStyled>
              <ArrowIcon />
              <LiText>{paragraf7[lang]}</LiText>
            </LiStyled>
          </UlStyled>
        </Box>
      </MainDiv>
      <BoxBtn>
        <LogLink to="/login">
          <LogInBtn type="button">{sign[lang]}</LogInBtn>
        </LogLink>
        <RegLink to="/register">
          <SignInBtn type="button">{registr[lang]}</SignInBtn>
        </RegLink>
      </BoxBtn>
    </>
  );
};
