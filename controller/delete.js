const {
  User,
  Courses,
  Schedules,
  UsersCourses,
  CoursesSchedules,
} = require("../models");
const { where } = require("sequelize");

//delete User
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await UsersCourses.destroy({
      where: { idUsers: id },
    });
    const user = await User.destroy({
      where: { idUsers: id },
    });
    if (user) {
      res.status(200).json({
        status: "success",
        code: 200,
        message: "User deleted",
      });
    } else {
      res.status(404).json({
        status: "error",
        code: 404,
        message: "User not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "error",
      code: 500,
      message: error.message,
    });
  }
};

//delete course
const deleteCourses = async (req, res) => {
  try {
    const { id } = req.params;
    await CoursesSchedules.destroy({
      where: { idCourses: id },
    });
    const courses = await Courses.destroy({
      where: { idCourses: id },
    });
    if (courses) {
      res.status(200).json({
        status: "success",
        code: 200,
        message: "Course deleted",
      });
    } else {
      res.status(404).json({
        status: "error",
        code: 404,
        message: "Course not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "error",
      code: 500,
      message: error.message,
    });
  }
};

//delete schedules
const deleteSchedule = async (req, res) => {
  try {
    const { id } = req.params;
    const schedules = await Schedules.destroy({
      where: { idSchedules: id },
    });
    if (schedules) {
      res.status(200).json({
        status: "success",
        code: 200,
        message: "Schedule deleted",
      });
    } else {
      res.status(404).json({
        status: "error",
        code: 404,
        message: "Schedule not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "error",
      code: 500,
      message: error.message,
    });
  }
};

module.exports = {
  deleteUser,
  deleteCourses,
  deleteSchedule,
};
