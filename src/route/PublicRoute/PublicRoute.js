import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/authSelectors';
import { Outlet, Navigate } from 'react-router-dom';

export const PublicRoute = ({ restricted = false, redirectTo = '/' }) => {
  const isLoggerIn = useSelector(getIsLoggedIn);

  const shouldRedirect = isLoggerIn && restricted;

  return shouldRedirect ? <Navigate to={redirectTo} /> : <Outlet />;
};
