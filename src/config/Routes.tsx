import { LoginCallback } from '@okta/okta-react';
import { Home, Login, Protected } from '@/routes';
import { Secure } from '@/components';

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
    element: {LoginCallback},
  },
  {
    path: '/protected',
    element: (
      <Secure>
        <Protected />
      </Secure>
    )
  }
];