import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import HomeComponent from './pages/home';
import PlaceToStay from './pages/PlaceToStay';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [{
      path: "/",
      element: <HomeComponent />
    }, 
    {
      path: "/placetostay",
      element: <PlaceToStay />
    }]
  },
]);


export default router;