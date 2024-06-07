import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { api } from "..";

export interface Root {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export interface Rating {
  rate: number;
  count: number;
}

export const useGetProducts = (): UseQueryResult<Array<Root>, Error> => {
  return useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data } = await api.get("/products");
      return data;
    },
  });
};
