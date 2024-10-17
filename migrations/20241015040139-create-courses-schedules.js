"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("courses_schedules", {
      idCS: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      idCourses: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "courses",
          key: "idCourses",
        },
      },
      idSchedules: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "schedules",
          key: "idSchedules",
        },
      },
      isActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("courses_schedules");
  },
};
