const { User } = require('../models/User.js')

module.exports = app => {
  // your user routes go here...
  // GET all users
  app.get('/user', (req, res) => {
    User.findAll()
      .then(user => res.json(user))
      .catch(e => console.log(e))
  })
  // POST a user
  app.post('/user/bulk', (req, res) => {
    User.create(req.body)
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })
  // PUT a user
  app.put('/user/:id', (req, res) => {
    User.update(req.body, { where: { id: req.params.id } })
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })
  // DELETE a user
  app.delete('/user/:id', (req, res) => {
    User.destroy({ where: { id: req.params.id } })
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })
}
