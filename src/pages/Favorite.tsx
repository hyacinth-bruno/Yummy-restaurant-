// src/pages/Favorite.tsx
import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import RecipeCard from '../components/RecipeCard';
import { RootState } from '../store/store';

const Favorite: React.FC = () => {
  const favorites = useSelector((state: RootState) => state.favorite.recipes);

  return (
    <Container>
      <Typography variant="h4" component="h2" gutterBottom>
        Favorite Recipes
      </Typography>
      <Grid container spacing={3}>
        {favorites.map(recipe => (
          <Grid item key={recipe.id}>
            <RecipeCard recipe={recipe} isFavorite={true} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Favorite;
