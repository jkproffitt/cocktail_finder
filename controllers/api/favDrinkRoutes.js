const { user, cocktail, favoriteCocktail } = require('../../models');
const router = require('express').Router();

const getUserFavoriteDrink = async (userId) => {
  try {
    const userWithFavorites = await user.findByPk(userId, {
      include: [{ model: cocktail, through: favoriteCocktail, as: 'favorited_drinks' }],
    });

    if (!userWithFavorites) {
      return null;
    }

    return userWithFavorites.favorited_drinks;
  } catch (error) {
    console.error('Error getting user\'s favorite drink:', error);
    throw error;
  }
};

router.get('/', async (req, res) => {
  try {
    const userId = req.session.user_id;
    console.error("i am hungry" + userId);
    console.log("i am hungry" + userId);

    const favoriteDrinks = await getUserFavoriteDrink(userId);

    if (!favoriteDrinks) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({ favoriteDrinks });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/', async (req, res) => {
  try {
    const userId = req.session.user_id;

    const newFavoriteDrink = await favoriteCocktail.create({
      user_id: userId,
      cocktail_id: req.body.cocktail_id,
    });

    res.status(201).json({ message: 'Favorite drink added successfully', favoriteDrink: newFavoriteDrink });
  } catch (error) {
    console.error('Error adding users favorite drink:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const userId = req.session.user_id;
    const favoriteId = req.params.id;

    const updatedFavoriteDrink = await favoriteCocktail.update(req.body, {
      where: {
        id: favoriteId,
        user_id: userId,
      },
    });

    if (updatedFavoriteDrink[0] === 0) {
      return res.status(404).json({ error: 'Favorite drink not found' });
    }

    res.json({ message: 'Favorite drink updated successfully' });
  } catch (error) {
    console.error('Error updating user\'s favorite drink:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const userId = req.session.user_id;
    const favoriteId = req.params.id;

    const deletedFavoriteDrink = await favoriteCocktail.destroy({
      where: {
        id: favoriteId,
        user_id: userId,
      },
    });

    if (deletedFavoriteDrink === 0) {
      return res.status(404).json({ error: 'Favorite drink not found' });
    }

    res.json({ message: 'Favorite drink deleted successfully' });
  } catch (error) {
    console.error('Error deleting user\'s favorite drink:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;

//favoriteDrinkRoutes
// router.get('/:id', async (req, res) => {
//     try {
//       const favDrinkData = await cocktail.findByPk(req.params.id, {
//         include: [{ model: favoriteCocktail, through: cocktail, as: 'favorited_drinks' }]
//       });
  
//       if (!favDrinkData) {
//         res.status(404).json({ message: 'No cocktail found with this id!' });
//         return;
//       }
  
//       res.status(200).json(favDrinkData);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });
  
//   router.post('/favorite-drink/:name', async (req, res) => {
//     const drinkName = req.params.name;
  
//     try {
  
//       const drinks = await getDrinkByName(drinkName);
  
//       if (!drinks || drinks.length === 0) {
//         return res.status(404).json({ error: 'Drink not found' });
//       }
  
//       const favoriteDrink = drinks[0];
  
//      await favoriteCocktail.create({
//       user_id: 1, 
//       cocktail_id: 1
//      })
  
//       res.json({ message: 'Drink favorited successfully', favoriteDrink });
//     } catch (error) {
//       console.error('Error favoriting drink:', error);
//       res.status(500).json({ error: 'Internal server error' });
//     }
//   });