import { useContext } from 'react';
import { ShoppingCartContext } from '../../context/ShoppingCart/ShoppingCartContext';
import { Buttons } from './components/Buttons';
import {
  NavigateFunction,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import { useGetCartByUserId } from '../../services/queries/useGetCartByUserId';

export function Cart(): JSX.Element {
  const { removeFromCart, cart } = useContext(ShoppingCartContext);
  const [params] = useSearchParams();
  const userId = params.get('userId');
  const { data } = useGetCartByUserId({ userId: Number(userId) });

  const navigate: NavigateFunction = useNavigate();

  return (
    <div>
      <h1>Actions to Remove Products</h1>
      <button onClick={() => navigate('/')}>Go to Products</button>
      {userId && (
        <>
          <p>UserId: {userId}</p>
          <p>Quantity: {data?.date}</p>
        </>
      )}

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
              <Buttons
                removeProduct={removeFromCart}
                productId={product.product.id}
              />
            </div>
          ))}
        </>
      )}
    </div>
  );
}
