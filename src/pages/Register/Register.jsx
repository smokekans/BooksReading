import { useDispatch } from 'react-redux';
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

const Register = () => {
  const dispatch = useDispatch();

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
      alert('Пароли не совпадают');
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
            Ім’я <Orange>*</Orange>
          </Label>
          <Input type="text" name="name" id="nameInput" />
          <Label htmlFor="emailInput">
            Електронна адреса <Orange>*</Orange>
          </Label>
          <Input type="email" name="email" id="emailInput" />
          <Label htmlFor="passInput">
            Пароль <Orange>*</Orange>
          </Label>
          <Input type="password" name="password" id="passInput" />
          <Label htmlFor="confPassInput">
            Підтвердити пароль <Orange>*</Orange>
          </Label>
          <Input type="password" name="confirm" id="confPassInput" />
          <SignInBtn type="submit">Зареєструватися</SignInBtn>
          <LogText>
            Вже з нами? <LogLink to="/login">Увійти</LogLink>
          </LogText>
        </Form>
      </RegisterDiv>
      <MainDiv>
        <Title>Books Reading</Title>
        <div>
          <ul>
            <UlTitle>Допоможе вам</UlTitle>
            <LiStyled>
              <ArrowIcon />
              <LiText>Швидше сформулювати свою ціль і розпочати читати</LiText>
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
          </ul>
          <ul>
            <UlTitleSecond>Також ви зможете </UlTitleSecond>
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
          </ul>
        </div>
      </MainDiv>
    </Container>
  );
};

export default Register;
