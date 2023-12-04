const router = require('express').Router();
const { response } = require('express');
const { user } = require('../../models');

router.post('/', async (req, res) => {
  const findUser = await user.findOne({
    where: { username: req.body.user_name },
  });

  if (findUser) {
    res
      .status(400)
      .json({ message: 'There is already a user with that username.' });
    return;
  }

  // If there is no match with the username, send a incorrect message to the user and have them retry
  try {
    const newUser = await user.create({
      username: req.body.user_name,
      password: req.body.password,
      email: req.body.email,
      dob: req.body.dob,
    });

    req.session.save(() => {
      req.session.user_id = newUser.id;
      req.session.logged_in = true;
      res.status(200).json(newUser);
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
