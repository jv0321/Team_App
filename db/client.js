const { Sequelize } = require('sequelize');
const is_prod = process.env.NODE_ENV

console.log(is_prod)

const client = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'postgres',
    logging: false
  });

module.exports = client