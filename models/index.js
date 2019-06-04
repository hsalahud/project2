const Sequelize = require('sequelize')
const sequelize = require('../config')

let User = require('./User.js')(sequelize, Sequelize)
let Timelog = require('./TimeLog.js')(sequelize, Sequelize)
let Image = require('./Image.js')(sequelize, Sequelize)

User.hasMany(Timelog)
User.hasMany(Image)
Timelog.belongsTo(User)
Image.belongsTo(User)

module.exports = {
  User,
  Timelog,
  Image
}
