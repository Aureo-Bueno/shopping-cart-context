import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ShoppingCartProvider } from './context/ShoppingCart/ShoppingCartContext';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';
import { ThemeProvider } from 'styled-components';
import { theme } from './themes';
import { Provider } from 'react-redux';
import { store } from './store';

export function App(): JSX.Element {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <ShoppingCartProvider>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
          </ThemeProvider>
        </Provider>
      </ShoppingCartProvider>
    </QueryClientProvider>
  );
}
