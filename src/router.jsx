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
        path: '/editowner',
        element: <EditOwner />,
      },
      {
        path: '/createowner',
        element: <CreateOwner />,
      },
      {
        path: '/detailowner',
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
