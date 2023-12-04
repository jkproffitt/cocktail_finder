const { user, cocktail, favoriteCocktail } = require('../../models');
const router = require('express').Router();

const getDrinkByName = async (name) => {
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
  const data = await response.json();
  return data.drinks;
}

const getRandomDrink = async () => {
  const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
  const data = await response.json();
  return data.drinks[0];
}

router.get('/drink/:name', async (req, res) => {
  const drinkName = req.params.name;

  try {
    const drinks = await getDrinkByName(drinkName);

    if (!drinks || drinks.length === 0) {
      return res.status(404).json({ error: 'Drink not found' });
    }

    res.json({ drink: drinks[0].strDrink });
  } catch (error) {
    console.error('Error getting drink by name:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/random-drink', async (req, res) => {
  const drinkName = req.params.name;

  try {
    const randomDrink = await getRandomDrink(drinkName);
    res.json({ drink: randomDrink.strDrink });
  } catch (error) {
    console.error('Error getting random drink:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;

