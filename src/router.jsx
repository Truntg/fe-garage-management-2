import { createBrowserRouter } from 'react-router-dom';

import AppLayout from './components/AppLayout';
import ListGarage from './components/Garage/List/ListGarage';
import OwnerList from './components/Owner/List';
import User from './pages/User';
import Signin from './pages/Signin';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/user',
        element: <User />,
      },
      {
        path: '/owner',
        element: <OwnerList />,
      },
      {
        path: '/garage',
        element: <ListGarage />,
      },
    ],
  },
  {
    path: '/signin',
    element: <Signin />,
  },
  {
    path: '/forgot',
    element: <ForgotPassword />,
  },
  {
    path: '/reset',
    element: <ResetPassword />,
  },
]);
export { router };
