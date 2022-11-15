import { createBrowserRouter } from 'react-router-dom';
import React, { Suspense } from 'react';
import App from './App';
const HomePage = React.lazy(() => import('./pages/home'));
const PlaceToStay = React.lazy(() => import('./pages/PlaceToStay'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: (
          <Suspense fallback={<>Loading...</>}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: '/placetostay',
        element: (
          <Suspense fallback={<>Loading...</>}>
            <PlaceToStay />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
