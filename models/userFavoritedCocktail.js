const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserFavoritedCocktail extends Model {}

UserFavoritedCocktail.init(
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
    modelName: 'user',
  }
);

module.exports = UserFavoritedCocktail;
