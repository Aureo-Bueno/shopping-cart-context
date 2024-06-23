import { Fragment, useContext } from 'react';
import { ShoppingCartContext } from '../../context/ShoppingCart/ShoppingCartContext';
import { Buttons } from './components/Buttons';
import {
  NavigateFunction,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import { useGetCartByUserId } from '../../services/queries/useGetCartByUserId';
import {
  Container,
  Title,
  NavigationButton,
  UserInfo,
  CartMessage,
  ProductList,
  ProductItem,
  ProductTitle,
  ProductDescription,
  ProductPrice,
  ProductQuantity,
} from './styles';

export function Cart(): JSX.Element {
  const { removeFromCart, cart } = useContext(ShoppingCartContext);
  const [params] = useSearchParams();
  const userId = params.get('userId');
  const { data } = useGetCartByUserId({ userId: Number(userId) });

  const navigate: NavigateFunction = useNavigate();

  return (
    <Container>
      <Title>Actions to Remove Products</Title>
      <NavigationButton onClick={() => navigate('/')}>
        Go to Products
      </NavigationButton>
      {userId && (
        <UserInfo>
          <p>UserId: {userId}</p>
          <p>Quantity: {data?.date}</p>
        </UserInfo>
      )}
      {cart.quantity === 0 && cart.products.length === 0 ? (
        <CartMessage>Cart is empty</CartMessage>
      ) : (
        <>
          <p>Items cart</p>
          <ProductList>
            {cart.products.map((product) => (
              <ProductItem key={product.product.id}>
                <ProductTitle>{product.product.title}</ProductTitle>
                <ProductDescription>
                  {product.product.description}
                </ProductDescription>
                <ProductPrice>${product.product.price}</ProductPrice>
                <ProductQuantity>Quantity: {product.quantity}</ProductQuantity>
                <Buttons
                  removeProduct={removeFromCart}
                  productId={product.product.id}
                />
              </ProductItem>
            ))}
          </ProductList>
        </>
      )}
    </Container>
  );
}
