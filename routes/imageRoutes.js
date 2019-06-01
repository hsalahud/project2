const db = require('../models')

module.exports = app => {
  app.get('/images', (req, res) => {
    db.Image.findAll()
      .then(images => res.json(images))
      .catch(e => console.log(e))
  })
  app.get('/images/:userId', (req, res) => {
    db.Image.findOne({ where: { userId: req.params.id }})
      .then(image => res.json(image))
      .catch(e => console.log(e))
  })
  // app.get('/images/:firebaseId', (req, res) => {
  //   db.User.findOne({ where: { firebaseId: req.params.firebaseId }, include: [{ model: db.Image}, {model: db.Timelog}] })
  //     .then(user => res.json(user))
  //     .catch(e => console.log(e))
  // })
  app.post('/images', (req, res) => {
    db.Image.create(req.body)
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })
  app.put('/images/:id', (req, res) => {
    db.Image.update(req.body, { where: { id: req.params.id } })
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })
  app.delete('/images/:id', (req, res) => {
    db.Image.destroy({ where: { id: req.params.id } })
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })
}