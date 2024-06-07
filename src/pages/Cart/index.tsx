import { useContext } from "react";
import { ShoppingCartContext } from "../../context/ShoppingCart/ShoppingCartContext";
import { Buttons } from "./components/Buttons";

export function Cart() {
  const { removeFromCart, cart } = useContext(ShoppingCartContext);
  return (
    <div>
      <h1>Actions to Remove Products</h1>
      {cart.quantity === 0 && cart.products.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          <p>Items cart</p>
          {cart.products.map((product) => (
            <div key={product.product.id}>
              <h2>{product.product.title}</h2>
              <p>{product.product.description}</p>
              <p>{product.product.price}</p>
              <p>{product.quantity}</p>
              <Buttons removeProduct={removeFromCart} productId={product.product.id} />
            </div>
          ))}
        </>
      )}
    </div>
  );
}
