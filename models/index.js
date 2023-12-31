const User = require('./user');
const Cocktail = require('./cocktail');
const FavoriteCocktail = require('./favoriteCocktail');

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

module.exports = {
  user: User,
  cocktail: Cocktail,
  favoriteCocktail: FavoriteCocktail,
};
