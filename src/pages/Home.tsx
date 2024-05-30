// src/pages/Home.tsx
import React from 'react';
import { Container, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';
import popularFoodImage from '../assets/food.jpeg';
import image from '../assets/image.png';
import soup from '../assets/soup.png';
import shrimp from '../assets/shrimp.avif';
import salad from '../assets/salad.avif';
import pizza from '../assets/pizza.webp';

const Home: React.FC = () => (
  <Container>
    <div style={{ position: 'relative', textAlign: 'center', color: 'white' }}>
      <img src={popularFoodImage} alt="Healthy Delicious Recipes" style={{ width: '100%', height: 'auto' }} />
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: '#000',
          background: 'rgba(255, 255, 255, 0.7)',
          padding: '10px',
          borderRadius: '5px'
        }}
      >
        HEALTHY DELICIOUS RECIPES
      </Typography>
    </div>
    <Typography variant="h4" component="h2" gutterBottom style={{ marginTop: '20px', textAlign: 'center' }}>
      Popular food
    </Typography>
    <Typography variant="body1" style={{ textAlign: 'center', marginBottom: '20px' }}>
      We provide a variety of food and beverage recipes with height taste from famous chefs
    </Typography>
    <Grid container spacing={3} justifyContent="center">
      {[image, soup, shrimp, salad, pizza].map((foodImage, index) => (
        <Grid item xs={12} sm={6} md={4} lg={2} key={index}>
          <Card>
            <CardMedia component="img" height="140" image={foodImage} alt={`Popular food ${index + 1}`} />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Popular food {index + 1}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default Home;
