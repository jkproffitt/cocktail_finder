const router = require('express').Router();
const userRoutes = require('./userRoutes');
const cocktailRoutes = require('./cocktailRoutes');

router.use('/users', userRoutes);
router.use('/cocktail', cocktailRoutes);

const loginRoute = require('./loginRoute');
const logoutRoute = require('./logoutRoute');
const signupRoute = require('./signupRoute');

router.use('/login', loginRoute);
router.use('/logout', logoutRoute);
router.use('/signup', signupRoute);

module.exports = router;