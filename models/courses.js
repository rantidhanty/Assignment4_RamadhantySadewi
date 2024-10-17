"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Courses extends Model {
    static associate(models) {
      models.Courses.belongsToMany(models.User, {
        through: models.UsersCourses,
        foreignKey: "idCourses",
        as: "Users",
      });
      models.Courses.belongsToMany(models.Schedules, {
        through: models.CoursesSchedules,
        foreignKey: "idCourses",
        as: "Schedules",
      });
    }
  }
  Courses.init(
    {
      idCourses: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nameCourses: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      codeCourses: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      priceCourses: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      instructor: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: "Courses",
      tableName: "courses",
      timestamps: false,
    }
  );
  return Courses;
};
