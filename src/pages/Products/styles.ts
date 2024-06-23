import { styled } from 'styled-components';

export const ProductList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 0;
  justify-content: center;
`;

export const ProductItem = styled.li`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-10px);
  }
`;

export const ProductTitle = styled.h2`
  font-size: 1.5em;
  margin: 0 0 10px 0;
`;

export const ProductDescription = styled.p`
  font-size: 1em;
  color: #666;
  text-align: center;
`;

export const ProductPrice = styled.p`
  font-size: 1.2em;
  font-weight: bold;
  color: #333;
  margin: 10px 0;
`;

export const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  margin: 10px 0;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  &:first-child {
    margin-right: 10px;
  }
`;

export const ButtonCategory = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  margin: 10px 10px 10px 0;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;
