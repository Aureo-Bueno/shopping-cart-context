import { Dispatch } from 'react';
import { Product } from '../../../../context/ShoppingCart/ShoppingCartContext';

type ButtonsProps = {
  removeProduct?:
    | Dispatch<
        React.SetStateAction<{
          products: Product[];
          quantity: number;
        }>
      >
    | undefined;
  productId?: number;
};

export function Buttons({
  removeProduct,
  productId,
}: ButtonsProps): JSX.Element {
  const handleRemoveProduct = () => {
    if (!removeProduct || !productId) return;

    removeProduct((prevState) => {
      const productIndex = prevState.products.findIndex(
        (product) => product.product.id === productId
      );

      if (productIndex === -1) return prevState; // Product not found

      const product = prevState.products[productIndex];

      if (product.quantity > 1) {
        const updatedProduct = { ...product, quantity: product.quantity - 1 };
        const updatedProducts = [
          ...prevState.products.slice(0, productIndex),
          updatedProduct,
          ...prevState.products.slice(productIndex + 1),
        ];
        return { ...prevState, products: updatedProducts };
      } else {
        const updatedProducts = prevState.products.filter(
          (product) => product.product.id !== productId
        );
        return {
          ...prevState,
          products: updatedProducts,
          quantity: prevState.quantity - 1,
        };
      }
    });
  };

  return (
    <div>
      <button onClick={handleRemoveProduct}>Remove</button>
    </div>
  );
}
