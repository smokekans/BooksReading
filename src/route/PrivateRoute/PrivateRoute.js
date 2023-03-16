import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/authSelectors';
import { Outlet, Navigate } from 'react-router-dom';

export const PrivateRoute = () => {
  const isLoggerIn = useSelector(getIsLoggedIn);
  return isLoggerIn ? <Outlet /> : <Navigate to="/login" />;
};

// import React from 'react';
// import { useSelector } from 'react-redux';
// import { Navigate } from 'react-router-dom';
// import { getToken } from '../../redux/auth/authSelectors';

// export const PrivateRoute = ({ children }) => {
//   const authToken = useSelector(getToken);
//   if (!authToken) {
//     return <Navigate to="/login" />;
//   }
//   return children;
// };
