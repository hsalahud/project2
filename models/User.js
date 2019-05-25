module.exports = (sequelize, Sequelize) => {
  class User extends Sequelize.Model { }
  User.init(
    {
      name: {
        type: Sequelize.STRING,
        notNull: true,
      },
      dob: {
        type: Sequelize.DATE,
        notNull: true,
      },
      email: {
        type: Sequelize.STRING,
        notNull: true,
        isEmail: true
      },
      phone_number: {
        type: Sequelize.INTEGER,
        notNull: true,
        isNumeric: true
      },
      isMale: {
        type: Sequelize.BOOLEAN,
        notNull: true,
      },
      interestedIn: {
        type: Sequelize.BOOLEAN,
        notNull: true,
      },
      skillInterest: {
        type: Sequelize.STRING,
        notNull: true,
      },
      int1: {
        type: Sequelize.STRING,
        notNull: true,
      },
      int2: {
        type: Sequelize.STRING,
        notNull: true,
      },
      int3: {
        type: Sequelize.STRING,
        notNull: true,
      },
      bio: {
        type:Sequelize.STRING(500),
        notNull: true,
        len: [10, 500]
      },
      firebaseId: {
        type: Sequelize.STRING
      }
    },
    {
      sequelize,
      modelName: 'user'
    }
  )

  return User
}
