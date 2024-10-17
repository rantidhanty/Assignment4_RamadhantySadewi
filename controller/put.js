const { User, Courses, Schedules } = require("../models");
const { where } = require("sequelize");
const bcrypt = require("bcrypt");

const putUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { nameUsers, email, password } = req.body;

    // Validasi input
    if (!nameUsers || !email || (password && password.length < 6)) {
      return res.status(400).json({
        code: 400,
        status: "failed",
        message: "Invalid input",
      });
    }

    // Cek apakah user ada
    const user = await User.findOne({ where: { idUsers: id } });
    if (!user) {
      return res.status(404).json({
        code: 404,
        status: "failed",
        message: "User not found",
      });
    }

    // Siapkan data untuk update
    const updates = { nameUsers, email };
    if (password) {
      updates.password = await bcrypt.hash(password, 10);
    }

    // Update user
    await User.update(updates, { where: { idUsers: id } });
    const userIsUpdate = await User.findOne({ where: { idUsers: id } });
    res.status(200).json({
      code: 200,
      status: "success",
      message: "User updated successfully",
      update: userIsUpdate,
    });
  } catch (error) {
    return res.status(500).json({
      code: 500,
      status: "failed",
      message: error.message,
    });
  }
};

//update Courses
const putCourses = async (req, res) => {
  try {
    const { id } = req.params;
    const { nameCourses, codeCourses, priceCourses, description, instructor } =
      req.body;

    //Validasi input
    if (
      !nameCourses ||
      !codeCourses ||
      !priceCourses ||
      !description ||
      !instructor
    ) {
      return res.status(400).json({
        code: 400,
        status: "failed",
        message: "Invalid input",
      });
    }

    //Cek apakah course ada
    const course = await Courses.findOne({ where: { idCourses: id } });
    if (!course) {
      return res.status(404).json({
        code: 404,
        status: "failed",
        message: "Course not found",
      });
    }

    //Siapkan data untuk update
    const updates = {
      nameCourses,
      codeCourses,
      priceCourses,
      description,
      instructor,
    };
    await Courses.update(updates, {
      where: { idCourses: id },
    });
    const courseIsUpdate = await Courses.findOne({ where: { idCourses: id } });
    res.status(200).json({
      code: 200,
      status: "success",
      message: "Course updated successfully",
      update: courseIsUpdate,
    });
  } catch (error) {
    return res.status(500).json({
      code: 500,
      status: "failed",
      message: error.message,
    });
  }
};

//put Schedules
const putSchedule = async (req, res) => {
  try {
    const { id } = req.params;
    const { dataSchedules, timeSchedules } = req.body;

    // Validasi input
    if (!dataSchedules || !timeSchedules) {
      return res.status(400).json({
        code: 400,
        status: "failed",
        message: "Invalid input",
      });
    }

    // Cek apakah schedule ada
    const schedule = await Schedules.findOne({ where: { idSchedules: id } });
    if (!schedule) {
      return res.status(404).json({
        code: 404,
        status: "failed",
        message: "Schedule not found",
      });
    }

    //siapkan data untuk update
    const updates = { dataSchedules, timeSchedules };
    await Schedules.update(updates, { where: { idSchedules: id } });
    const scheduleIsUpdate = await Schedules.findOne({
      where: { idSchedules: id },
    });
    res.status(200).json({
      code: 200,
      status: "success",
      message: "Schedule updated successfully",
      update: scheduleIsUpdate,
    });
  } catch (error) {
    return res.status(500).json({
      code: 500,
      status: "failed",
      message: error.message,
    });
  }
};

module.exports = { putUser, putCourses, putSchedule };
