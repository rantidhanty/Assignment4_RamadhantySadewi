"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Schedules extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Schedules.belongsToMany(models.Courses, {
        through: models.CoursesSchedules,
        foreignKey: "idSchedules",
        as: "Courses",
      });
    }
  }
  Schedules.init(
    {
      idSchedules: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      dataSchedules: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      timeSchedules: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: "Schedules",
      tableName: "schedules",
      timestamps: false,
    }
  );
  return Schedules;
};
