import { createBrowserRouter } from 'react-router-dom';
import User from './pages/User';
import SildeBar from './components/SildeBar';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SildeBar />,
  },
  {
    path: '/user',
    element: <User />,
  },
]);
export { router };
