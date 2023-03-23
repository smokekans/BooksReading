import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/authSelectors';
import { Outlet, Navigate } from 'react-router-dom';

export const PrivateRoute = () => {
  const isLoggerIn = useSelector(getIsLoggedIn);
  return isLoggerIn ? <Outlet /> : <Navigate to="/login" />;
};
