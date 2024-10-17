"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "courses_schedules",
      [
        {
          idCS: 1,
          idCourses: 1,
          idSchedules: 1
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("courses_schedules", null, {});
  },
};
