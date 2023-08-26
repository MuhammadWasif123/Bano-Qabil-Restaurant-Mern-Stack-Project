import React from 'react';
import Cards from '../components/Cards';
import FoodData from './FoodData';

const CardPage = () => {
  return (
    <div>
      <h1>Food Menu</h1>
      <Cards data={FoodData} />
    </div>
  );
};

export default CardPage;