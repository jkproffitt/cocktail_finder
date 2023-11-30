const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class cocktail extends Model {}

cocktail.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cocktail_name: {
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

module.exports = cocktail;
