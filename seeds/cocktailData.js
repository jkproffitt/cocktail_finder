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
  {
    cocktail_name: 'Tequila',
  },
  {
    cocktail_name: 'Whiskey',
  },
  {
    cocktail_name: 'Mimosa',
  },
  {
    cocktail_name: 'Bloody mary',
  },
  {
    cocktail_name: 'Moscow mule',
  },
  {
    cocktail_name: 'espresso martini',
  },
  {
    cocktail_name: 'Vodka',
  },
];

const seedCocktail = () => cocktail.bulkCreate(cocktailData);

module.exports = seedCocktail;
