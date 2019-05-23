const Sequelize = require('sequelize')
const connection = require('../config')

class User extends Sequelize.Model {}
User.init({
  // first_name: Sequelize.STRING
}, { sequelize: connection, modelName: 'user' })

module.exports = User
