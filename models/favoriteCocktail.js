const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class favoriteCocktail extends Model {}

favoriteCocktail.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'favoritedCocktail',
  }
);

module.exports = favoriteCocktail;
