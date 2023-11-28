const user = require('./User');
const cocktail = require('./cocktail');
const userFavoritedCocktail = require('./userFavoritedCocktail');

user.hasMany(userFavoritedCocktail, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

userFavoritedCocktail.belongsTo(user, {
  foreignKey: 'user_id',
});

userFavoritedCocktail.belongsTo(cocktail, {
  foreignKey: 'cocktail_id',
});

// cocktail.hasMany(userFavoritedCocktail, {
//   foreignKey: 'cocktail_id',
//   onDelete: 'CASCADE',
// });

UserFavoritedCocktail.associate = (models) => {
    models.UserFavoritedCocktail.belongsTo(models.User, { foreignKey: 'user_id' });
    models.UserFavoritedCocktail.belongsTo(models.Cocktail, { foreignKey: 'cocktailName' });
  },
  
module.exports = { user, cocktail, userFavoritedCocktail };
