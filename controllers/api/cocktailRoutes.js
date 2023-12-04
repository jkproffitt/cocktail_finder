
const router = require('express').Router();

//enter all js files here
//search cocktail by name
const getDrinkByName = async (name) => {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`
  );
  const data = await response.json();
  return data.drinks;
};

getDrinkByName('margarita').then((data) => console.log(data));
//look up cocktail by ID
const getDrinkById = async (id) => {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  const data = await response.json();
  return data.drinks;
};

getDrinkById('11007').then((data) => console.log(data));

//search for ingredient by name
const getIngredientByName = async (name) => {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${name}`
  );
  const data = await response.json();
  return data.ingredients;
};

getIngredientByName('lemon').then((data) => console.log(data));

//get random cocktail
const getRandomDrink = async () => {
  const response = await fetch(
    'https://www.thecocktaildb.com/api/json/v1/1/random.php'
  );
  const data = await response.json();
  return data.drinks;
};

getRandomDrink().then((data) => console.log(data));

module.exports = router;

