import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { api } from '..';

type Params = {
  userId: number;
};

export interface Product {
  productId: number;
  quantity: number;
}

export interface CartByUserId {
  id: number;
  userId: number;
  date: string;
  products: Array<Product>;
}

export const useGetCartByUserId = ({
  userId,
}: Params): UseQueryResult<CartByUserId, Error> => {
  return useQuery({
    queryKey: ['cartByUserId'],
    queryFn: async () => {
      const { data } = await api.get(`/carts?userId=${userId}`);
      return data;
    },
  });
};
