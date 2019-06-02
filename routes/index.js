module.exports = app => {
  // require('./itemRoutes.js')(app)
  require('./imageRoutes.js')(app)
  require('./userRoutes.js')(app)
}
