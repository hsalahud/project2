const db = require('../models')

module.exports = app => {
  app.get('/users', (req, res) => {
    db.User.findAll({include: [{ model: db.Image}, {model: db.Timelog}] })
      .then(users => res.json(users))
      .catch(e => console.log(e))
  })
<<<<<<< HEAD
  // //Make sure you are grabbing correct information 
  // app.get('/users/:id', (req, res) => {
  //   console.log(`The id is: ${req.params.id}`)
  //   db.User.findOne({ where: { id: req.params.id }, include: [{ model: db.Image}, {model: db.Timelog}] })
  //     .then(user => res.json(user)).then(console.log(user.name, user.image))
  //     .catch(e => console.log(e))
  // })

  app.get('/users/:firebaseId', (req, res) => {  
=======
  app.get('/interestedIn/:interestedIn', (req, res) => {
    db.User.findAll({ where: { interestedIn: req.params.interestedIn }, include: [{ model: db.Image}, {model: db.Timelog}] })
      .then(user => res.json(user))
      .catch(e => console.log(e))
  })
  app.get('/users/:firebaseId', (req, res) => {
>>>>>>> e5689d0e99a08dda9ffcde3c2119670c993c8b4c
    db.User.findOne({ where: { firebaseId: req.params.firebaseId }, include: [{ model: db.Image}, {model: db.Timelog}] })
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