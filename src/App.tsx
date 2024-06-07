import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ShoppingCartProvider } from "./context/ShoppingCart/ShoppingCartContext";
import { Products } from "./pages/Product";

export function App() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <ShoppingCartProvider>
        <div>Hello, There is Context API example.</div>
        <Products />
      </ShoppingCartProvider>
    </QueryClientProvider>
  );
}
