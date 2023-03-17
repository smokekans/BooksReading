import { Container } from '../../App.styled';
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

export const AuthorizationInfo = () => {
  return (
    <>
      <Container>
        <MainDiv>
          <Title>Books Reading</Title>
          <Box>
            <UlTitle>Допоможе вам</UlTitle>
            <UlStyled>
              <LiStyled>
                <ArrowIcon />
                <LiText>
                  Швидше сформулювати свою ціль і розпочати читати
                </LiText>
              </LiStyled>
              <LiStyled>
                <ArrowIcon />
                <LiText>
                  Пропорційно розподілити навантаження на кожний день
                </LiText>
              </LiStyled>
              <LiStyled>
                <ArrowIcon />
                <LiText>Відстежувати особистий успіх</LiText>
              </LiStyled>
            </UlStyled>
            <UlTitle>Також ви зможете </UlTitle>
            <UlStyled>
              <LiStyled>
                <ArrowIcon />
                <LiText>Формувати особисту думку незалежну від інших</LiText>
              </LiStyled>
              <LiStyled>
                <ArrowIcon />
                <LiText>
                  Підвищити свої професійні якості опираючись на нові знання
                </LiText>
              </LiStyled>
              <LiStyled>
                <ArrowIcon />
                <LiText>Стати цікавим співрозмовником</LiText>
              </LiStyled>
            </UlStyled>
          </Box>
        </MainDiv>
        <BoxBtn>
          <LogLink to="/login">
            <LogInBtn type="button">Увійти</LogInBtn>
          </LogLink>
          <RegLink to="/register">
            <SignInBtn type="button">Реєстрація</SignInBtn>
          </RegLink>
        </BoxBtn>
      </Container>
    </>
  );
};
