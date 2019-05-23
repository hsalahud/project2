const Sequelize = require('sequelize')
let sequelize

if (process.env.NODE_ENV === 'production') {
  // sequelize = new Sequelize(process.env.JAWSDB_URL)
} else {
  sequelize = new Sequelize('mysql://root:Capullo123!@localhost:3306/xxxx_db')
}

module.exports = sequelize
