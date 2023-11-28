const sequelize = require('../config/connection');
const { User, Cocktail, favoriteCocktail } = require('../models');

const userSeedData = require('./userData.json');
const cocktailSeedData = require('./cocktailData.json');
const favoriteSeedData = require('./favoriteCocktailData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userSeedData);

  for (const { id } of users) {
    const newFavorite = await favoriteCocktail.create({
      cocktail_id: id,
    });
  }

  process.exit(0);
};

seedDatabase();
