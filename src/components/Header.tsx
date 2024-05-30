// src/components/Header.tsx
import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import logo from '../assets/logo.png'; // Assuming you have a logo file

const StyledAppBar = styled(AppBar)({
  backgroundColor: 'white',
  boxShadow: 'none',
});

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const LogoBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
});

const NavLinksBox = styled(Box)({
  display: 'flex',
  gap: '20px',
});

const StyledLink = styled(Link)({
  textDecoration: 'none',
  color: 'black',
  fontSize: '1rem',
  fontWeight: 'bold',
  '&:hover': {
    color: '#555',
  },
});

const Header: React.FC = () => {
  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        <LogoBox>
          <img src={logo} alt="YUMMY" style={{ width: '40px', marginRight: '10px' }} />
          <Typography variant="h6" component="div" style={{ color: 'black' }}>
            YUMMY
          </Typography>
        </LogoBox>
        <NavLinksBox>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/recipe">Recipe</StyledLink>
          <StyledLink to="/favorite">Favorite</StyledLink>
          <StyledLink to="/contact">Contact</StyledLink>
        </NavLinksBox>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Header;
