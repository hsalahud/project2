module.exports = (sequelize, Sequelize) => {
  class Image extends Sequelize.Model { }
  Image.init(
    {
      text: {
        type: Sequelize.STRING
      }
    },
    {
      sequelize,
      modelName: 'image'
    }
  )

  return Image
}