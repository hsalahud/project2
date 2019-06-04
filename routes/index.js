module.exports = app => {
  require('./timeLog.js')(app)
  require('./imageRoutes.js')(app)
  require('./userRoutes.js')(app)
}
