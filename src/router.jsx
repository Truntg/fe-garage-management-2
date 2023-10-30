import { createBrowserRouter } from 'react-router-dom';

import AppLayout from './components/AppLayout';
import ListGarage from './components/Garage/List/ListGarage';
import OwnerList from './components/Owner/List';
import User from './pages/User';

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
