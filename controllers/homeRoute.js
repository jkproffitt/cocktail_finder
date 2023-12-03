const router = require('express').Router();
const { User, cocktail, favoriteCocktail } = require('../models');
const auth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const drinks = await favoriteCocktail.findAll({
      include: [{ model: cocktail }],
    });
    const drink = drinks.map((cocktail) => cocktail.get({ plain: true }));
    //  const con = console.log(posts)
    res.render('home', {
      drink,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
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

//get the specific post with all of its comments.
router.get('/post/:id', async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          include: [
            {
              model: User,
              attributes: ['user_name'],
            },
          ],
        },
      ],
    });
    const singlePost = post.get({ plain: true });

    res.render('post', {
      singlePost,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err, message: 'Something went wrong.' });
  }
});

module.exports = router;
