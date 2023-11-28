const sequelize = require('../config/connection');
const userSeedData = require('./userData');
const cocktailSeedData = require('./cocktailData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await cocktailSeedData();

  await userSeedData();

  process.exit(0);
};

seedAll();
