import { createBrowserRouter } from 'react-router-dom';

import SildeBar from './components/SildeBar';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SildeBar />,
  },
]);
export { router };
