import { Home, Login } from '@/routes';

export const Routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  }
];