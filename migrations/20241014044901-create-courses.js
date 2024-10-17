'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("courses", {
      idCourses: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nameCourses: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      codeCourses: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      priceCourses: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      instructor: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      isActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("courses");
  }
};