import { createBrowserRouter } from 'react-router-dom';
import { Products } from '../pages/Products';
import { Cart } from '../pages/Cart';
import { Product } from '../pages/Product';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Products />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
  {
    path: '/product/:id',
    element: <Product />,
  }
]);
