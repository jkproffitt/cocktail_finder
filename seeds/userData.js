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
  {
    username: 'Peter',
    email: 'peterkim@gmail.com',
    password: 'password123',
    dob: '1997-10-25',
  },
  {
    username: 'Jess',
    email: 'JKProfit@yahoo.com',
    password: 'password1234',
    dob: '1990-4-17',
  },
  {
    username: 'Sel',
    email: 'Selostian123@gmail.com',
    password: 'password123456',
    dob: '1980-11-15',
  },
];
const seedUser = () => user.bulkCreate(userData);

module.exports = seedUser;
