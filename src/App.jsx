import { Layout } from './components/Layout/Layout';
import { Navigate, Route, Routes } from 'react-router-dom';
import { PublicRoute } from 'route/PublicRoute/PublicRoute';
import { PrivateRoute } from 'route/PrivateRoute/PrivateRoute';
import 'antd/dist/reset.css';

import useMatchMedia from 'hooks/useMatchMedia';
import AuthInfo from 'pages/AuthInfo';
import { lazy } from 'react';

const Login = lazy(() => import('./pages/Login/Login'));
const Register = lazy(() => import('./pages/Register/Register'));
const Library = lazy(() => import('./pages/Library'));
const Statistics = lazy(() => import('./pages/Statistics/Statistics'));
const Training = lazy(() => import('./pages/Training'));
const AddBook = lazy(() => import('./pages/AddBook'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));

export const App = () => {
  const { isMobile } = useMatchMedia();

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={isMobile ? <AuthInfo /> : <Navigate to={'/login'} />}
          />
          <Route
            path=""
            element={<PublicRoute redirectTo="library" restricted />}
          >
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route path="" element={<PrivateRoute />}>
            <Route
              path="addbook"
              element={isMobile ? <AddBook /> : <Navigate to={'/library'} />}
            />
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
