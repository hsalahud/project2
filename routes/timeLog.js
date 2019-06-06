const db = require('../models')
const moment = require('moment')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

module.exports = app => {
  app.get('/timelog', (req, res) => {
    db.Timelog.findAll( {
      where: {
        timeStamp: {
          [Op.gte]: moment().subtract(7, 'days').toDate()
        }
      },
      order: [
        ['timeStamp', 'ASC']
      ]
      })
        
  
      .then(users => res.json(users))
      .catch(e => console.log(e))
    })

  app.get('/timelog/:userId', (req, res) => {
    db.Timelog.findAll({ where: { userId: req.params.userId} })
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
  app.delete('/timelog/:userId', (req, res) => {
    db.Timelog.destroy({ where: { userId: req.params.userId } })
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })
}