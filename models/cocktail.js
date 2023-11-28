const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Cocktail extends Model {}

Cocktail.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cocktailName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'cocktail',
  }
);

module.exports = Cocktail;
