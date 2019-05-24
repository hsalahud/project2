const db = require('../models')

module.exports = app => {
  app.get('/users', (req, res) => {
    db.User.findAll()
      .then(users => res.json(users))
      .catch(e => console.log(e))
  })
  app.get('/users/:id', (req, res) => {
    db.User.findOne({ where: { id: req.params.id }, include: [{ model: db.Image}, {model: db.Timelog}] })
      .then(user => res.json(user))
      .catch(e => console.log(e))
  })
  app.post('/users', (req, res) => {
    db.User.create(req.body)
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })
  app.put('/users/:id', (req, res) => {
    db.User.update(req.body, { where: { id: req.params.id } })
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })
  app.delete('/users/:id', (req, res) => {
    db.User.destroy({ where: { id: req.params.id } })
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })
}