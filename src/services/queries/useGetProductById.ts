import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { api } from '..';
import { Root } from './useGetProducts';

type Params = {
  productId: number;
}

export const useGetProductById = ({ productId }: Params): UseQueryResult<Root, Error> => {
  return useQuery({
    queryKey: ['productById'],
    queryFn: async () => {
      const { data } = await api.get(`/products/${productId}`);
      return data;
    },
  });
};