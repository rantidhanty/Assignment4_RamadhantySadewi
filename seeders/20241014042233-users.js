"use strict";
const bcrypt = require("bcrypt");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    
    // Reset auto increment to 1 (MySQL syntax)
    // buat reset auto increment jadi 1
    // await queryInterface.sequelize.query(
    //   "ALTER TABLE Users AUTO_INCREMENT = 1"
    // );

    await queryInterface.bulkInsert(
      "users",
      [
        {
          nameUsers: "dhanty",
          email: "rantidhanty@gmail.com",
          password: bcrypt.hashSync("qwerty12", 10),
        },
        {
          nameUsers: "dhanty_2",
          email: "19215337@bsi.ac.id",
          password: bcrypt.hashSync("qwerty12", 10),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete("users", null, {});
  },
};
