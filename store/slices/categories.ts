import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios";
import { Category } from "~/types";

interface IState {
  categories: Category[];
  mainCategories: Category[];
}

const initialState: IState = {
  categories: [],
  mainCategories: []
};

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  () => {
    return axios
      .get(`https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/categories/list`, {
        params: {
          lang: 'en',
          country: 'us'
        },
        headers: {
          'X-RapidAPI-Key': '821387e508msh11ddc1cd1ed1d10p1df687jsn21f5fce067c8',
          'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
        }
      })
      .then(({ data }) => data)
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state) => {
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
      state.mainCategories = action.payload.filter((category: Category) => {
        return category.CatName.toLowerCase() === 'women'
          || category.CatName.toLowerCase() === 'men'
          || category.CatName.toLowerCase() === 'kids';
      })
    });
    builder.addCase(fetchCategories.rejected, (state, action) => {
      console.log(action.payload)
    })
  }
})

export default categoriesSlice.reducer
