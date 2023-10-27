import { createBrowserRouter } from 'react-router-dom';
import User from './pages/User';
import OwnerList from './components/Owner/List/List';
import SideBar from './components/SideBar/Sidebar';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SideBar />,
  },
  {
    path: '/user',
    element: <User />,
  },
  {
    path: '/owner',
    element: <OwnerList />,
  },
]);
export { router };
