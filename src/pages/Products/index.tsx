import { useContext } from 'react';
import { ShoppingCartContext } from '../../context/ShoppingCart/ShoppingCartContext';
import { useCart } from '../../hooks/useCart';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import {
  ProductList,
  ProductItem,
  ProductTitle,
  ProductDescription,
  ProductPrice,
  Button,
  ButtonCategory,
  Container,
} from './styles';

export function Products(): JSX.Element {
  const { products } = useContext(ShoppingCartContext);
  const { handleAddProduct } = useCart();
  const categories = useSelector((state: RootState) => state.categories);
  const navigate: NavigateFunction = useNavigate();

  return (
    <>
      <Navbar />
      <h1>Product</h1>
      <Container>
        {categories.map((category, key) => (
          <ButtonCategory
            key={key}
            onClick={() => navigate(`/product/category/${category.title}`)}
          >
            {category.title}
          </ButtonCategory>
        ))}
      </Container>
      <ProductList>
        {products?.map((product) => (
          <ProductItem key={product.id}>
            <ProductTitle>{product.title}</ProductTitle>
            <ProductDescription>{product.description}</ProductDescription>
            <ProductPrice>${product.price}</ProductPrice>
            <Button onClick={() => handleAddProduct(product)}>
              Add to cart
            </Button>
            <Button onClick={() => navigate(`/product/${product.id}`)}>
              Go to details
            </Button>
          </ProductItem>
        ))}
      </ProductList>
    </>
  );
}
