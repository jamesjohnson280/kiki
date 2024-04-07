import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Routes } from '@/config/Routes';

export const App = () => {
  const router = createBrowserRouter(Routes);
  return (
    <RouterProvider router={router} />
  );
};
 