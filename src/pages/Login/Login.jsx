import { useDispatch, useSelector } from 'react-redux';
import { signInThunk } from 'redux/auth/authOperations';
import {
  AddText,
  Container,
  Form,
  GoogleBtn,
  Input,
  Label,
  LogInBtn,
  LoginDiv,
  MainDiv,
  MainText,
  Orange,
  Quotes,
  RegLink,
  Stick,
} from './Login.styled';
import { ReactComponent as Icon } from '../../images/googleIcon.svg';
import { getLanguage } from 'redux/language/languageSelectors';
import { langAuthorizationInfo } from 'languages/langAuthorizationInfo';

const Login = () => {
  const dispatch = useDispatch();
  const lang = useSelector(getLanguage);
  const { sign, registr, quote, author, mail, password } =
    langAuthorizationInfo;

  function handleSubmit(ev) {
    ev.preventDefault();
    const loginData = {
      email: ev.target.email.value,
      password: ev.target.password.value,
    };
    dispatch(signInThunk(loginData));
  }

  return (
    <Container>
      <LoginDiv>
        <Form onSubmit={handleSubmit}>
          <GoogleBtn type="button">
            <Icon />
            Google
          </GoogleBtn>
          <Label className="label" htmlFor="emailInput">
            {mail[lang]} <Orange>*</Orange>
          </Label>
          <Input
            type="email"
            name="email"
            id="emailInput"
            placeholder="your@email.com"
          />
          <Label
            style={{ marginTop: 20 }}
            className="label"
            htmlFor="passwordInput"
          >
            {password[lang]} <Orange>*</Orange>
          </Label>
          <Input
            type="password"
            name="password"
            id="passwordInput"
            placeholder={password[lang]}
          />
          <LogInBtn type="submit">{sign[lang]}</LogInBtn>
          <RegLink to="/register">{registr[lang]}</RegLink>
        </Form>
      </LoginDiv>
      <MainDiv>
        <Quotes>,,</Quotes>
        <MainText>{quote[lang]} </MainText>
        <Stick></Stick>
        <AddText>{author[lang]}</AddText>
      </MainDiv>
    </Container>
  );
};

export default Login;
