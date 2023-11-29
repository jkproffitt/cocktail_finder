const User = require('./User');
const Cocktail = require('./Cocktail');
const FavoriteCocktail = require('./FavoriteCocktail');

User.hasMany(FavoriteCocktail, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

FavoriteCocktail.belongsTo(User, {
  foreignKey: 'user_id',
});

//assoications
FavoriteCocktail.belongsTo(Cocktail, {
  foreignKey: 'cocktail_id',
});

// FavoriteCocktail.belongsToMany(User, {
//   through: {
//     model: Cocktail,
//     unique: false,
//   },
//   as: 'cocktails',
// });

// cocktail.hasMany(userFavoritedCocktail, {
//   foreignKey: 'cocktail_id',
//   onDelete: 'CASCADE',
// });

module.exports = {
  user: User,
  cocktail: Cocktail,
  favoriteCocktail: FavoriteCocktail,
};
