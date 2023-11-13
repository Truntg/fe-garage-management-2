import { createBrowserRouter } from 'react-router-dom';

import AppLayout from './components/AppLayout/index.jsx';
import ListGarage from './components/Garage/List/ListGarage';
import OwnerList from './components/Owner/List/List.jsx';
import User from './pages/User';
import EditOwner from './components/Owner/Edit/Edit.jsx';
import CreateService from './components/Service/Create/Create.jsx';
import EditService from './components/Service/Edit/Edit.jsx';
import DetailService from './components/Service/Detail/Detail.jsx';
import CreateOwner from './components/Owner/Create/Create.jsx';
import DetailOwner from './components/Owner/Detail/Detail.jsx';
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
        path: '/editowner/:id',
        element: <EditOwner />,
      },
      {
        path: '/createowner',
        element: <CreateOwner />,
      },
      {
        path: '/owner/:id',
        element: <DetailOwner />,
      },
      {
        path: '/createservice',
        element: <CreateService />,
      },
      {
        path: '/editservice',
        element: <EditService />,
      },
      {
        path: '/detailservice',
        element: <DetailService />,
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
