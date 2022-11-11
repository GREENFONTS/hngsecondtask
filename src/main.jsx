import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import HomeComponent from './pages/home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [{
      path: "/",
      element: <HomeComponent />
    }]
  },
]);


export default router;