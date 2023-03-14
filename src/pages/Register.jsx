import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signUpThunk } from "redux/auth/authOperations";

const Register = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  function handleSubmit(ev) {
    ev.preventDefault()
    let userPassword = ''
    if(ev.target.password.value === ev.target.confirm.value){
      userPassword = ev.target.password.value
      const newUser = {
      name: ev.target.name.value,
      email: ev.target.email.value,
      password: userPassword
      }
      dispatch(signUpThunk(newUser))
      
    } else {
      alert('Пароли не совпадают')
    }
    
}

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
        <input type="text" name='name' />
        <input type="email" name='email' />
        <input type="password" name='password' />
        <input type="password" name='confirm' />
        <button type='submit'>Registrate</button>
        <Link to='/login'>Login</Link>
      </form>
      </div>
      <div>
        <h2>Books Reading</h2>
        <ul>
          <h3>Допоможе вам</h3>
          <li><span>{'>'}</span> Швидше сформулювати свою ціль і розпочати читати</li>
          <li><span>{'>'}</span> Пропорційно розподілити навантаження на кожний день</li>
          <li><span>{'>'}</span> Відстежувати особистий успіх</li>
        </ul>
        <ul>
          <h3>Також ви зможете </h3>
          <li><span>{'>'}</span> Формувати особисту думку незалежну від інших</li>
          <li><span>{'>'}</span> Підвищити свої професійні якості опираючись на нові знання</li>
          <li><span>{'>'}</span> Стати цікавим співрозмовником</li>
        </ul>
      </div>
      
    </div>
  )
};

export default Register;
