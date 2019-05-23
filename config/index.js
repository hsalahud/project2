<<<<<<< HEAD
//localStorage.getItem('keyname')
//document.querySelectio('').file
//refer to 50min mark of https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=8fd69687-c7e0-4dec-9aa0-aa1c0019337a

//get user info:
//firebase.auth().onAuthStateChanged(user => {
  // console.log(user)
// })
=======
const Sequelize = require('sequelize')
let sequelize

if (process.env.NODE_ENV === 'production') {
  // sequelize = new Sequelize(process.env.JAWSDB_URL)
} else {
  sequelize = new Sequelize('mysql://root:Capullo123!@localhost:3306/xxxx_db')
}

module.exports = sequelize
>>>>>>> e7f49775d1d130a0e363cb88d84e4ccbdb6d7d91
