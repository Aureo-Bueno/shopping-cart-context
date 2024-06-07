import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { Root, useGetProducts } from "../../services/queries/useGetProducts";

export type Product = {
  product: Root;
  quantity: number;
};

type ShoppingCartContextType = {
  products: Array<Root> | undefined;
  cart: {
    products: Array<Product>;
    quantity: number;
  };
  addToCart: Dispatch<
    SetStateAction<{
      products: Array<Product>;
      quantity: number;
    }>
  >;
  removeFromCart?: Dispatch<
    SetStateAction<{
      products: Array<Product>;
      quantity: number;
    }>
  >;
};

export const ShoppingCartContext = createContext<ShoppingCartContextType>({
  products: [],
  cart: {
    products: [
      {
        product: {
          id: 0,
          title: "",
          price: 0,
          description: "",
          category: "",
          image: "",
          rating: {
            rate: 0,
            count: 0,
          },
        },
        quantity: 0,
      },
    ],
    quantity: 0,
  },
  addToCart: () => {},
});

type ShoppingCartProviderProps = {
  children: ReactNode;
};

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cart, setCart] = useState<{
    products: Array<Product>;
    quantity: number;
  }>({
    products: [],
    quantity: 0,
  });
  const { data } = useGetProducts();

  console.log(cart);
  return (
    <ShoppingCartContext.Provider
      value={{
        products: data,
        cart: {
          products: cart.products,
          quantity: cart.quantity,
        },
        addToCart: setCart,
        removeFromCart: setCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
