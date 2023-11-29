const sequelize = require('../config/connection');
const userSeedData = require('./userData');
const seedCocktail = require('./cocktailData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedCocktail();

  await userSeedData();

  process.exit(0);
};

seedAll();
