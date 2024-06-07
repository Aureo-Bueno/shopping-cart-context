import { createBrowserRouter } from 'react-router-dom';
import { Products } from '../pages/Product';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Products />,
    children: [],
  },
]);
