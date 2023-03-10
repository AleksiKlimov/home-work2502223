import React from 'react';

import { Routes, Route } from 'react-router-dom';
import MainPage from '../../pages/MainPage';
import ProductPage from '../../pages/ProductPage';

const AppNavigation: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />

      <Route path="/productItem/:dropId" element={<ProductPage />} />
    </Routes>
  );
};

export default AppNavigation;
