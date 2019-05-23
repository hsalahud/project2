const { User } = require('../models')
module.exports = app => {
// GET all users
 app.get('/users', (req, res) => {
   User.findAll()
     .then(users => res.json(users))
     .catch(e => console.log(e))
 })
//  GET a single user
 app.get('/users', function (req, res) {
  User.select(req.body, { where: { id: req.params.id } })
     .then(_ => res.sendStatus(200))
     .catch(e => console.log(e))
  })
 // POST a user
 app.post('/users/:id', (req, res) => {
   User.create(req.body)
     .then(_ => res.sendStatus(200))
     .catch(e => console.log(e))
 })
 // PUT a user
 app.put('/users/:id', (req, res) => {
   User.update(req.body, { where: { id: req.params.id } })
     .then(_ => res.sendStatus(200))
     .catch(e => console.log(e))
 })
 // DELETE a user
 app.delete('/users/:id', (req, res) => {
   User.destroy({ where: { id: req.params.id } })
     .then(_ => res.sendStatus(200))
     .catch(e => console.log(e))
 })
}

