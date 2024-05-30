// src/components/RecipeCard.tsx
import React from 'react';
import { Card, CardContent, CardMedia, Typography, IconButton } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { addFavorite, removeFavorite } from '../store/favoriteSlice';

interface RecipeCardProps {
  recipe: {
    id: string;
    name: string;
    category: string;
    image: string;
    ingredients: string[];
  };
  isFavorite: boolean;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, isFavorite }) => {
  const dispatch = useDispatch();

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFavorite(recipe.id));
    } else {
      dispatch(addFavorite(recipe));
    }
  };

  return (
    <Card>
      <CardMedia component="img" height="140" image={recipe.image} alt={recipe.name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {recipe.name}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {recipe.category}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Ingredients: {recipe.ingredients.filter(ingredient => ingredient).join(', ')}
        </Typography>
        <IconButton onClick={handleFavoriteClick}>
          {isFavorite ? <Favorite /> : <FavoriteBorder />}
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default RecipeCard;
