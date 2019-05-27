const db = require('../models')

module.exports = app => {
  app.get('/timelog', (req, res) => {
    db.Timelog.findAll()
      .then(users => res.json(users))
      .catch(e => console.log(e))
  })
  app.get('/timelog/:id', (req, res) => {
    db.Timelog.findOne({ where: { id: req.params.id }, include: [{ model: db.Image}, {model: db.User}] })
      .then(user => res.json(user))
      .catch(e => console.log(e))
  })
  app.post('/timelog', (req, res) => {
    db.Timelog.create(req.body)
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })
  app.put('/timelog/:id', (req, res) => {
    db.Timelog.update(req.body, { where: { id: req.params.id } })
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })
  app.delete('/timelog/:id', (req, res) => {
    db.Timelog.destroy({ where: { id: req.params.id } })
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })
}