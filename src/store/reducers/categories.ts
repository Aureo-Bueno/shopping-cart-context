import { createSlice } from "@reduxjs/toolkit";

type Category = {
  id: number;
  title: string;
};

const stateCategory: Array<Category> = [
  {
    id: 1,
    title: `men's clothing`,
  },
  {
    id: 2,
    title: 'jewelery',
  },
  {
    id: 3,
    title: 'electronics',
  },
  {
    id: 4,
    title: `women's clothing`,
  },
];


export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: stateCategory,
  reducers: {},
});
