import Library from 'pages/Library';
import Login from 'pages/Login/Login';
import Register from 'pages/Register/Register';
import Statistics from 'pages/Statistics/Statistics';
import Training from 'pages/Training';
import { Layout } from './components/Layout/Layout';
import { Navigate, Route, Routes, useSearchParams } from 'react-router-dom';
import { PublicRoute } from 'route/PublicRoute/PublicRoute';
import { PrivateRoute } from 'route/PrivateRoute/PrivateRoute';
import NotFound from 'pages/NotFound/NotFound';
import 'antd/dist/reset.css';

import useMatchMedia from 'hooks/useMatchMedia';
import AddBook from 'pages/AddBook';
import AuthInfo from 'pages/AuthInfo';
import { useDispatch, useSelector } from 'react-redux';
import { addAccessToken } from 'redux/auth/authSlice';
import { useEffect } from 'react';
import { token } from 'redux/auth/token';
import { getToken } from 'redux/auth/authSelectors';
import { getUserThunk } from 'redux/auth/authOperations';

export const App = () => {
  const { isMobile } = useMatchMedia();

  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();
  const userToken = useSelector(getToken)

  const accessToken = searchParams.get('accessToken');
  useEffect(() => {
    if (accessToken !== null) {
      dispatch(addAccessToken(accessToken));
      token.set(accessToken);
    }
  }, [accessToken, dispatch]);

  useEffect(() => {
    if (userToken !== null) {
      dispatch(getUserThunk())
    }
  },[userToken, dispatch])

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={isMobile ? <AuthInfo /> : <Navigate to={'/login'} />} />
          <Route path="" element={<PublicRoute redirectTo="library" restricted />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route path="" element={<PrivateRoute />}>
            <Route path="addbook" element={isMobile ? <AddBook /> : <Navigate to={'/library'} />} />
            <Route path="library" element={<Library />} />
            <Route path="training" element={<Training />} />
            <Route path="statistics" element={<Statistics />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
