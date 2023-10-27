import { createBrowserRouter } from 'react-router-dom';

import User from './pages/User';
import OwnerList from './components/Owner/List';
import SildeBar from './components/Sidebar/SildeBar';
import ListGarage from './components/Garage/List/ListGarage';

const router = createBrowserRouter([
  {
    path: '/',
  },
  {
    element: <SildeBar />,
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
  // {
  //   path: '/user',
  //   element: <User />,
  // },
  // {
  //   path: '/owner',
  //   element: <OwnerList />,
  // },
  // {
  //   path: '/garage',
  //   element: <ListGarage />,
  // },
]);
export { router };
