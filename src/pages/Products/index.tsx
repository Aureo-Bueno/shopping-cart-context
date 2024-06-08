import { useContext } from 'react';
import { ShoppingCartContext } from '../../context/ShoppingCart/ShoppingCartContext';
import { useCart } from '../../hooks/useCart';
import { NavigateFunction, useNavigate } from 'react-router-dom';

export function Products(): JSX.Element {
  const { products } = useContext(ShoppingCartContext);
  const { handleAddProduct } = useCart();

  const navigate: NavigateFunction = useNavigate();

  return (
    <div>
      <h1>Product</h1>
      <button onClick={() => navigate('/cart')}>Go to Cart</button>
      <ul>
        {products?.map((product) => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <button onClick={() => handleAddProduct(product)}>
              Add to cart
            </button>
            <button onClick={() => navigate(`/product/${product.id}`)}>
              Go to details
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
