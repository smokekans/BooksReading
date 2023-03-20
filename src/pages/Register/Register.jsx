import { useDispatch, useSelector } from 'react-redux';
import { signUpThunk } from 'redux/auth/authOperations';
import {
  Container,
  Orange,
  RegisterDiv,
  Form,
  Label,
  Input,
  SignInBtn,
  LogLink,
  LogText,
  GoogleBtn,
  MainDiv,
  Title,
  UlTitle,
  LiText,
  UlTitleSecond,
  LiStyled,
} from './Register.styled';
import { ReactComponent as Icon } from '../../images/googleIcon.svg';
import { ReactComponent as ArrowIcon } from '../../images/arrow.svg';
import { getLanguage } from 'redux/language/languageSelectors';
import { langAuthorizationInfo } from 'languages/langAuthorizationInfo';

const Register = () => {
  const dispatch = useDispatch();
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
    regist,
    name,
    mail,
    password,
    confirm,
    withUs,
    wrong,
  } = langAuthorizationInfo;

  function handleSubmit(ev) {
    ev.preventDefault();
    let userPassword = '';
    if (ev.target.password.value === ev.target.confirm.value) {
      userPassword = ev.target.password.value;
      const newUser = {
        name: ev.target.name.value,
        email: ev.target.email.value,
        password: userPassword,
      };
      dispatch(signUpThunk(newUser));
    } else {
      alert(`${wrong[lang]}`);
    }
  }

  return (
    <Container>
      <RegisterDiv>
        <Form onSubmit={handleSubmit}>
          <GoogleBtn type="button">
            <Icon />
            Google
          </GoogleBtn>
          <Label htmlFor="nameInput">
            {name[lang]} <Orange>*</Orange>
          </Label>
          <Input type="text" name="name" id="nameInput" />
          <Label htmlFor="emailInput">
            {mail[lang]} <Orange>*</Orange>
          </Label>
          <Input type="email" name="email" id="emailInput" />
          <Label htmlFor="passInput">
            {password[lang]} <Orange>*</Orange>
          </Label>
          <Input type="password" name="password" id="passInput" />
          <Label htmlFor="confPassInput">
            {confirm[lang]} <Orange>*</Orange>
          </Label>
          <Input type="password" name="confirm" id="confPassInput" />
          <SignInBtn type="submit">{regist[lang]}</SignInBtn>
          <LogText>
            {withUs[lang]} <LogLink to="/login">{sign[lang]}</LogLink>
          </LogText>
        </Form>
      </RegisterDiv>
      <MainDiv>
        <Title>Books Reading</Title>
        <div>
          <ul>
            <UlTitle>{helpyou[lang]}</UlTitle>
            <LiStyled>
              <ArrowIcon />
              <LiText>{paragraf1[lang]}</LiText>
            </LiStyled>
            <LiStyled>
              <ArrowIcon />
              <LiText>{paragraf2[lang]}</LiText>
            </LiStyled>
            <LiStyled>
              <ArrowIcon />
              <LiText>{paragraf3[lang]}</LiText>
            </LiStyled>
          </ul>
          <ul>
            <UlTitleSecond>{paragraf4[lang]} </UlTitleSecond>
            <LiStyled>
              <ArrowIcon />
              <LiText>{paragraf5[lang]}</LiText>
            </LiStyled>
            <LiStyled>
              <ArrowIcon />
              <LiText>{paragraf6[lang]}</LiText>
            </LiStyled>
            <LiStyled>
              <ArrowIcon />
              <LiText>{paragraf7[lang]}</LiText>
            </LiStyled>
          </ul>
        </div>
      </MainDiv>
    </Container>
  );
};

export default Register;
