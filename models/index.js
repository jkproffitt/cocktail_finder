const user = require('./User');
const cocktail = require('./cocktail');
const favoriteCocktail = require('./favoriteCocktail');

user.hasMany(favoriteCocktail, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

favoriteCocktail.belongsTo(user, {
  foreignKey: 'user_id',
});

//assoications
favoriteCocktail.belongsTo(cocktail, {
  foreignKey: 'cocktail_id',
});

// cocktail.hasMany(userFavoritedCocktail, {
//   foreignKey: 'cocktail_id',
//   onDelete: 'CASCADE',
// });

module.exports = { user, cocktail, userFavoritedCocktail: favoriteCocktail };
