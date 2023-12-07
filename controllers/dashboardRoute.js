const router = require('express').Router();
const { User, cocktail } = require('../models');
const auth = require('../utils/auth');

//get user session
router.get('/', async (req, res) => {
  try {
    const user = await Post.findAll({
      where: {
        user_id: req.session.user_id,
      },
      include: [
        {
          model: cocktail,
          include: {
            model: User,
            attributes: ['user_name'],
          },
        },
      ],
    });
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
});

module.exports = router;
