import { createBrowserRouter } from 'react-router-dom';

import AppLayout from './components/AppLayout';
import ListGarage from './components/Garage/List/ListGarage';
import OwnerList from './components/Owner/List';
import User from './pages/User';
import EditGarage from './components/Garage/Creater/EditGarage';
import ChangePass from './components/Profile/ChangePass';
import MyProfile from './components/Profile/MyProfile';

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
      {
        path: '/edit',
        element: <EditGarage />,
      },
      {
        path: '/change',
        element: <ChangePass />,
      },
      {
        path: '/mypo',
        element: <MyProfile />,
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
