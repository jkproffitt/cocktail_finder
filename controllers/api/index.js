const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);

const loginRoute = require('./loginRoute');
const logoutRoute = require('./logoutRoute');
const signupRoute = require('./signupRoute');

router.use('/login', loginRoute);
router.use('/logout', logoutRoute);
router.use('/signup', signupRoute);

module.exports = router;
