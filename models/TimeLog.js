module.exports = (sequelize, Sequelize) => {
  class Timelog extends Sequelize.Model { }
  Timelog.init(
    {
      hrsWorked: {
        type: Sequelize.INTEGER,
        notNull: true,
      },
      timeStamp: {
        type: Sequelize.DATE,
        notNull: true,
      }
    },
    {
      sequelize,
      modelName: 'timelog'
    }
  )
  return Timelog
}