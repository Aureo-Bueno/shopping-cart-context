import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ShoppingCartProvider } from './context/ShoppingCart/ShoppingCartContext';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';
import { ThemeProvider } from 'styled-components';
import { theme } from './themes';


export function App(): JSX.Element {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <ShoppingCartProvider >
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      </ShoppingCartProvider>
    </QueryClientProvider>
  );
}
