"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CoursesSchedules extends Model {
    static associate(models) {
      // define association here
    }
  }
  CoursesSchedules.init(
    {
      idCS: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      idCourses: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      idSchedules: {
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
      modelName: "CoursesSchedules",
      tableName: "courses_schedules",
      timestamps: false,
    }
  );
  return CoursesSchedules;
};
