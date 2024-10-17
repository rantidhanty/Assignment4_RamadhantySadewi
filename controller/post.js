const {
  User,
  Courses,
  Schedules,
  UsersCourses,
  CoursesSchedules,
} = require("@/models");
const { where } = require("sequelize");
const bcrypt = require("bcrypt");

//post User
const postUser = async (req, res) => {
  try {
    const { nameUsers, email, password } = req.body;
    const user = await User.create({
      nameUsers,
      email,
      password: await bcrypt.hash(password, 10),
    });
    return res.status(200).json({
      code: 200,
      status: "success",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      code: 500,
      status: "failed",
      message: error.message,
    });
  }
};

//post course
const postCourse = async (req, res) => {
  try {
    const { nameCourses, codeCourses, priceCourses, description, instructor } =
      req.body;
    const courses = await Courses.create({
      nameCourses,
      codeCourses,
      priceCourses,
      description,
      instructor,
    });
    return res.status(200).json({
      status: "success",
      code: 200,
      data: courses,
    });
  } catch (error) {
    return res.status(500).json({
      code: 500,
      status: "failed",
      message: error.message,
    });
  }
};

//post schedules
const postSchedules = async (req, res) => {
  try {
    const { dataSchedules, timeSchedules } = req.body;
    const schedules = await Schedules.create({
      dataSchedules,
      timeSchedules,
    });
    return res.status(200).json({
      status: "success",
      code: 200,
      data: schedules,
    });
  } catch (error) {
    return res.status(500).json({
      code: 500,
      status: "failed",
      message: error.message,
    });
  }
};

//UserCourses
const postUserCourses = async (req, res) => {
  try {
    const { idUsers, idCourses } = req.body;
    const userCourses = await UsersCourses.create({
      idUsers,
      idCourses,
    });
    return res.status(200).json({
      status: "success",
      code: 200,
      data: userCourses,
    });
  } catch (error) {
    return res.status(500).json({
      code: 500,
      status: "failed",
      message: error.message,
    });
  }
};

//CoursesSchedules
const postCoursesSchedules = async (req, res) => {
  try {
    const { idCourses, idSchedules } = req.body;
    const coursesSchedules = await CoursesSchedules.create({
      idCourses,
      idSchedules,
    });
    return res.status(200).json({
      status: "success",
      code: 200,
      data: coursesSchedules,
    });
  } catch (error) {
    return res.status(500).json({
      code: 500,
      status: "failed",
      message: error.message,
    });
  }
};

module.exports = {
  postUser,
  postCourse,
  postSchedules,
  postUserCourses,
  postCoursesSchedules,
};
