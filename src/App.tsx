import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ShoppingCartProvider } from './context/ShoppingCart/ShoppingCartContext';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';

export function App(): JSX.Element {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <ShoppingCartProvider >
        <RouterProvider router={router} />
      </ShoppingCartProvider>
    </QueryClientProvider>
  );
}
