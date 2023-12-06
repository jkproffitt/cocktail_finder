const router = require('express').Router();
const { User, cocktail, favoriteCocktail } = require('../models');
const auth = require('../utils/auth');

console.log('homeRoute');

router.get('/', async (req, res) => {
  try {
    if (!req.session.logged_in) {
      return res.redirect('/login');
    }

    const drinks = await favoriteCocktail.findAll({
      include: [{ model: cocktail }],
    });
    console.log(drinks);
    const drink = drinks.map((cocktail) => cocktail.get({ plain: true }));
    console.log(drink);
    //  const con = console.log(posts)
    if (!req.session.logged_in) {
      res.render('login');
    } else {
      res.render('home', {
        drink,
        logged_in: req.session.logged_in,
      });
    }

    console.log(req.session.logged_in);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    console.log('user logged in ' + req.session);
    res.redirect('/');
    return;
  }
  res.render('login');
});

router.get('/signup', (req, res) => {
  try {
    res.render('signUp');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
module.exports = router;
