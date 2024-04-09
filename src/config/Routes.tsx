import { LoginCallback } from '@okta/okta-react';
import { Home, Login } from '@/routes';

export const Routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/login/callback',
    component: {LoginCallback},
  }
];