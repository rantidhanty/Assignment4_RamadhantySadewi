"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "courses",
      [
        {
          idCourses: 1,
          nameCourses: "Fullstack Javascript",
          codeCourses: "FSJS",
          priceCourses: "38000000",
          description: "Courses fullstack javascript",
          instructor: "pak sigit",
        },
        {
          idCourses: 2,
          nameCourses: "Android Developer",
          codeCourses: "AD",
          priceCourses: "26000000",
          description: "Courses Android Developer",
          instructor: "pak haidar",
        },
        {
          idCourses: 3,
          nameCourses: "IOS Developer",
          codeCourses: "IOSD",
          priceCourses: "23500000",
          description: "Courses IOS Developer",
          instructor: "mas kholis",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("courses", null, {});
  },
};
