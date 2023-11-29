const { cocktail } = require('../models');

const cocktailData = [
  {
    cocktail_name: 'Margarita',
  },
  {
    cocktail_name: 'Tom Collins',
  },
  {
    cocktail_name: 'Water',
  },
];

const seedCocktail = () => cocktail.bulkCreate(cocktailData);

module.exports = seedCocktail;
