'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("schedules", {
      idSchedules: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      dataSchedules: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      timeSchedules: {
        type: Sequelize.TIME,
        allowNull: false,
      },
      isActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('schedules');
  }
};