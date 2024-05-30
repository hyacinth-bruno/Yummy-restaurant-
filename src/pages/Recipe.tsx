// src/pages/Recipe.tsx
import React, { useState } from 'react';
import axios from 'axios';
import { Container, TextField, Button, Grid, Typography } from '@mui/material';
import RecipeCard from '../components/RecipeCard';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';


interface Meal {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strMealThumb: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
}

interface ApiResponse {
  meals: Meal[];
}

const Recipe: React.FC = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState<Meal[]>([]);
  const favorites = useSelector((state: RootState) => state.favorite.recipes);

  const handleSearch = async () => {
    try {
      const response = await axios.get<ApiResponse>(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      setRecipes(response.data.meals || []);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" component="h2" gutterBottom>
        Search for Recipes
      </Typography>
      <TextField label="Meal Name" value={query} onChange={e => setQuery(e.target.value)} />
      <Button variant="contained" onClick={handleSearch}>
        Search
      </Button>
      {recipes.length === 0 && <Typography>Sorry we have not got this recipe yet !</Typography>}
      <Grid container spacing={3}>
        {recipes.map(recipe => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={recipe.idMeal}>
            <RecipeCard
              recipe={{
                id: recipe.idMeal,
                name: recipe.strMeal,
                category: recipe.strCategory,
                image: recipe.strMealThumb,
                ingredients: [recipe.strIngredient1, recipe.strIngredient2, recipe.strIngredient3],
              }}
              isFavorite={favorites.some(fav => fav.id === recipe.idMeal)}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Recipe;
