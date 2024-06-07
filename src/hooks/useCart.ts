import { useContext } from "react";
import {
  Product,
  ShoppingCartContext,
} from "../context/ShoppingCart/ShoppingCartContext";
import { Root } from "../services/queries/useGetProducts";

export const useCart = () => {
  const { cart, addToCart } = useContext(ShoppingCartContext);

  const handleAddProduct = (newProduct: Root) => {
    const hasProduct: boolean = cart.products.some(
      (product) => product.product.id === newProduct.id
    );

    if (!hasProduct) {
      return addToCart(
        (cartPrev: { products: Product[]; quantity: number }) => ({
          ...cartPrev,
          quantity: cartPrev.quantity + 1,
          products: [
            ...cartPrev.products,
            {
              product: newProduct,
              quantity: 1,
            },
          ],
        })
      );
    }

    addToCart((cartPrev: { products: Product[]; quantity: number }) => ({
      ...cartPrev,
      quantity: cartPrev.quantity + 1,
      products: cartPrev.products.map((product) => {
        if (product.product.id === newProduct.id) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        }
        return product;
      }),
    }));
  };

  return {
    cart,
    addToCart,
    handleAddProduct,
  };
};
