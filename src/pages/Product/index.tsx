import { useContext } from "react";
import {
  ShoppingCartContext,
} from "../../context/ShoppingCart/ShoppingCartContext";
import { Cart } from "../Cart";
import { useCart } from "../../hooks/useCart";

export function Products() {
  const { products } = useContext(ShoppingCartContext);
  const { handleAddProduct } = useCart();
  
  return (
    <div>
      <h1>Product</h1>
      <ul>
        {products?.map((product) => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <button onClick={() => handleAddProduct(product)}>
              Add to cart
            </button>
          </li>
        ))}
      </ul>
      <br />
      <h2>Cart</h2>
      <Cart />
    </div>
  );
}
