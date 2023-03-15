// import { ClassNames } from "@emotion/react";
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { signInThunk } from 'redux/auth/authOperations';

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
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="email" name="email" />
          <input type="password" name="password" />
          <button type="submit">Login</button>
          <Link to="/register">Registration</Link>
        </form>
      </div>
      <div>
        <h2>''</h2>
        <p>
          Книги — это корабли мысли, странствующие по волнам времени и бережно
          несущие свой драгоценный груз от поколения к поколению.{' '}
        </p>
        <span></span>
        <p>Бэкон Ф.</p>
      </div>
    </div>
  );
};

export default Login;
