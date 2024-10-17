'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UsersCourses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UsersCourses.init(
    {
      idUC: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      idUsers: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      idCourses: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: "UsersCourses",
      tableName: "users_courses",
      timestamps: false,
    }
  );
  return UsersCourses;
};