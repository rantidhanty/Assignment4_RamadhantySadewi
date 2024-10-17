"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "schedules",
      [
        {
          idSchedules: 1,
          dataSchedules: "2024-10-15",
          timeSchedules: "16:14:17",
        },
        {
          idSchedules: 2,
          dataSchedules: "2024-10-16",
          timeSchedules: "13:10:00",
        },
        {
          idSchedules: 3,
          dataSchedules: "2024-10-17",
          timeSchedules: "19:00:00",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("schedules", null, {});
  },
};
