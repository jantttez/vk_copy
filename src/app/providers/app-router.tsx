import { FeedPage } from '@pages/feed/index';
import { EditPage, LoginPage, MusicPage, Redirect, RegisterPage, UserPage } from '@pages/index';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/feed',
    element: <FeedPage />,
  },
  {
    path: '/',
    element: <Redirect />,
  },
  {
    path: '/:userId',
    element: <UserPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/:userId/edit',
    element: <EditPage />,
  },
  {
    path: '/music',
    element: <MusicPage />,
  },
  {
    path: '/friends',
    element: <div>нету.</div>,
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
