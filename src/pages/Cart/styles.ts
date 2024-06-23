import { styled } from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #333;
`;

export const NavigationButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  margin-bottom: 20px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const UserInfo = styled.div`
  margin-bottom: 20px;
  font-size: 1.1em;
  color: #555;

  p {
    margin: 5px 0;
  }
`;

export const CartMessage = styled.p`
  font-size: 1.2em;
  color: #888;
`;

export const ProductList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProductItem = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 100%;
  max-width: 600px;
  margin-bottom: 20px;
  text-align: left;
`;

export const ProductTitle = styled.h2`
  font-size: 1.5em;
  margin-bottom: 10px;
  color: #333;
`;

export const ProductDescription = styled.p`
  font-size: 1em;
  color: #666;
  margin-bottom: 10px;
`;

export const ProductPrice = styled.p`
  font-size: 1.2em;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

export const ProductQuantity = styled.p`
  font-size: 1em;
  color: #888;
  margin-bottom: 10px;
`;
