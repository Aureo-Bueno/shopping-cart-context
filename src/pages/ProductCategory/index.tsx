import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ShoppingCartContext } from '../../context/ShoppingCart/ShoppingCartContext';
import { Root } from '../../services/queries/useGetProducts';

export function ProductCategory(): JSX.Element {
  const { products } = useContext(ShoppingCartContext);
  const { category } = useParams();
  const navigate = useNavigate();
  const filteredProducts: Root[] | undefined =
    products && products.filter((product) => product.category === category);

  return (
    <div>
      <h1>Product {category}</h1>
      {filteredProducts &&
        filteredProducts.map((product) => (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <button onClick={() => navigate(`/product/${product.id}`)}>
              Go to details
            </button>
          </div>
        ))}
    </div>
  );
}
