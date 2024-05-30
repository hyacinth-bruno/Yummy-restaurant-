// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Header from './components/Header';
import Home from './pages/Home';
import Recipe from './pages/Recipe';
import Favorite from './pages/Favorite';
import Contact from './pages/Contact';

const App: React.FC = () => (
  <Provider store={store}>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  </Provider>
);

export default App;
