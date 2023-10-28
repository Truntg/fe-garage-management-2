import { createBrowserRouter } from 'react-router-dom';
import User from './pages/User';
import SildeBar from './components/SildeBar';
import Signin from './pages/Signin';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SildeBar />,
  },
  {
    path: '/user',
    element: <User />,
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
