import { useDispatch } from 'react-redux';
import { signInThunk } from 'redux/auth/authOperations';
import { AddText, Container, Form, GoogleBtn, Input, Label, LogInBtn, LoginDiv, MainDiv, MainText, Orange, Quotes, RegLink, Stick, } from './Login.styled';
import { ReactComponent as Icon } from '../../images/googleIcon.svg';

const Login = () => {
  const dispatch = useDispatch();

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
          <GoogleBtn type='button'>
            <Icon/>
            Google
          </GoogleBtn>
          <Label htmlFor='emailInput'>Електронна адреса <Orange>*</Orange></Label>
          <Input type="email" name="email" id='emailInput' placeholder='your@email.com'/>
          <Label htmlFor="passwordInput">Пароль <Orange>*</Orange></Label>
          <Input type="password" name="password" id='passwordInput'placeholder='Пароль'/>
          <LogInBtn type="submit">Увійти</LogInBtn>
          <RegLink to="/register">Реєстрація</RegLink>
        </Form>
      </LoginDiv>
      <MainDiv>
        <Quotes>''</Quotes>
        <MainText>
          Книги — это корабли мысли, странствующие по волнам времени и бережно
          несущие свой драгоценный груз от поколения к поколению.{' '}
        </MainText>
        <Stick></Stick>
          <AddText>Бэкон Ф.</AddText>
      </MainDiv>
    </Container>
  );
};

export default Login;
