import Library from 'pages/Library';
import Login from 'pages/Login/Login';
import Register from 'pages/Register/Register';
import Statistics from 'pages/Statistics';
import Training from 'pages/Training';
import { Layout } from './components/Layout/Layout';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="library" element={<Library />} />
          <Route path="training" element={<Training />} />
          <Route path="statistics" element={<Statistics />} />
        </Route>
        <Route path="*" element={<Login />} />
      </Routes>
    </>
  );
};
