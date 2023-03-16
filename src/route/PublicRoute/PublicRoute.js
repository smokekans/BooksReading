import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/authSelectors';
import { Outlet, Navigate } from 'react-router-dom';

export const PublicRoute = ({ restricted = false, redirectTo = '/' }) => {
  const isLoggerIn = useSelector(getIsLoggedIn);

  const shouldRedirect = isLoggerIn && restricted;

  return shouldRedirect ? <Navigate to={redirectTo} /> : <Outlet />;
};

// import React from 'react';
// import { useSelector } from 'react-redux';
// import { Navigate } from 'react-router-dom';
// import { getToken } from '../../redux/auth/authSelectors';

// export const PublicRoute = ({ children }) => {
//   const authToken = useSelector(getToken);
//   if (authToken) {
//     return <Navigate to="/library" />;
//   }
//   return children;
// };
