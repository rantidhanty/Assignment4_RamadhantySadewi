"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("users_courses", {
      idUC: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      idUsers: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "idUsers",
        },
      },
      idCourses: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Courses",
          key: "idCourses",
        },
      },
      isActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("users_courses");
  },
};
