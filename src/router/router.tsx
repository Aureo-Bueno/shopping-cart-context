import { createBrowserRouter } from 'react-router-dom';
import { Products } from '../pages/Products';
import { Cart } from '../pages/Cart';
import Product from '../pages/Product';
import { ProductCategory } from '../pages/ProductCategory';

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
  },
  {
    path: '/product/category/:category',
    element: <ProductCategory />,
  }
]);
