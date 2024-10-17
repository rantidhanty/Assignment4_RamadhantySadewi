"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.User.belongsToMany(models.Courses, {
        through: models.UsersCourses,
        foreignKey: "idUsers",
        as: "courses",
      });
    }
  }
  User.init(
    {
      idUsers: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nameUsers: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      }
    },
    {
      sequelize,
      modelName: "User",
      tableName: "users",
      timestamps: false,
    }
  );
  return User;
};
