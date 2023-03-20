import { AuthorizationInfo } from 'components/AuthorizationInfo/AuthorizationInfo';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { getIsLoggedIn } from 'redux/auth/authSelectors';

const AuthInfo = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <>{isLoggedIn ? <Navigate to={'./library'} /> : <AuthorizationInfo />}</>
  );
};

export default AuthInfo;
