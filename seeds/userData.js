const { user } = require('../models');

const userData = [
  {
    username: 'Sal',
    email: 'sal@hotmail.com',
    password: 'password45',
    dob: '1990-10-05',
  },
  {
    username: 'Lernantino',
    email: 'lernantino@gmail.com',
    password: 'password12',
    dob: '1990-10-05',
  },
  {
    username: 'Amiko',
    email: 'amiko2k20@aol.com',
    password: 'password1235',
    dob: '1990-10-05',
  },
];
const seedUser = () => user.bulkCreate(userData);

module.exports = seedUser;
