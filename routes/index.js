module.exports = app => {
  require('./timeLog.js')(app)
  require('./imageRoutes.js')(app)
  require('./userRoutes.js')(app)
  require('./Matches.js')(app)
  // require('../client/src/components/matches/Matches.js')(app)
}
