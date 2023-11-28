const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class FavoriteCocktail extends Model {}

FavoriteCocktail.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    cocktail_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'cocktail',
        key: 'id',
      },
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

module.exports = FavoriteCocktail;
