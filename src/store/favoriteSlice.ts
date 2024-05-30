import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Recipe {
  id: string;
  name: string;
  category: string;
  image: string;
  ingredients: string[];
}

interface FavoriteState {
  recipes: Recipe[];
}

const initialState: FavoriteState = {
  recipes: [],
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Recipe>) => {
      state.recipes.push(action.payload);
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      state.recipes = state.recipes.filter(recipe => recipe.id !== action.payload);
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
