const Sequelize = require('sequelize');

let sequelize = require('sequelize'),
  db = new Sequelize('authentication', 'root', null, {
    dialect: 'mysql'
  });

// db.query('CREATE DATABASE IF NOT EXISTS authentication').then(() => console.log('Database created'));

db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


const User = db.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  username: Sequelize.STRING,
  password: Sequelize.STRING
},
{
  timestamps: false
})


User.sync();

module.exports = {
  User: User
}
// db.sync().then(() => {
//   console.log('Connection has been established successfully.');
// }).catch((error) => {
//   console.log('Error connecting to database: ', error);
// })
