const { User } = require('../models');

const userData = [
  [
    {
      username: 'Sal',
      email: 'sal@hotmail.com',
      password: 'password45',
      dob: '10/5/1990',
    },
    {
      username: 'Lernantino',
      email: 'lernantino@gmail.com',
      password: 'password12',
      dob: '10/15/1990',
    },
    {
      username: 'Amiko',
      email: 'amiko2k20@aol.com',
      password: 'password1235',
      dob: '10/25/1990',
    },
  ],
];
const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
