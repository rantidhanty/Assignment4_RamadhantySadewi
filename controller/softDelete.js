const {
  User,
  Courses,
  Schedules,
  UsersCourses,
  CoursesSchedules,
} = require("../models");
const { where } = require("sequelize");

//soft Delete User
const softDeleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { isActive } = req.body;
    const user = await User.findOne({ where: { idUsers: id } });

    if (!user) {
      return res.status(404).json({
        code: 404,
        status: "failed",
        message: "User not found",
      });
    }

    await User.update({ isActive: isActive }, { where: { idUsers: id } });
    res.status(200).json({
      code: 200,
      status: "success",
      message: "User deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      code: 500,
      status: error.message,
    });
  }
};

//soft delete course
const softDeleteCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const { isActive } = req.body;
    const course = await Courses.findOne({ where: { idCourses: id } });

    if (!course) {
      return res.status(404).json({
        code: 404,
        status: "failed",
        message: "Course not found",
      });
    }

    await Courses.update({ isActive: isActive }, { where: { idCourses: id } });
    res.status(200).json({
      code: 200,
      status: "success",
      message: "Course deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      code: 500,
      status: error.message,
    });
  }
};

//soft delete schedule
const softDeleteSchedule = async (req, res) => {
  try {
    const { id } = req.params;
    const { isActive } = req.body;
    const schedule = await Schedules.findOne({ where: { idSchedules: id } });

    if (!schedule) {
      return res.status(404).json({
        code: 404,
        status: "failed",
        message: "Schedule not found",
      });
    }

    await Schedules.update(
      { isActive: isActive },
      { where: { idSchedules: id } }
    );
    res.status(200).json({
      code: 200,
      status: "success",
      message: "Schedule deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      code: 500,
      status: error.message,
    });
  }
};

//soft delete courses schedules
const softDeleteCoursesSchedules = async (req, res) => {
  try {
    const { id } = req.params;
    const { isActive } = req.body;
    const courseSchedule = await CoursesSchedules.findOne({
      where: { idCourses: id },
    });

    if (!courseSchedule) {
      return res.status(404).json({
        code: 404,
        status: "failed",
        message: "Course not found",
      });
    }

    await CoursesSchedules.update(
      { isActive: isActive },
      { where: { idCourses: id } }
    );
    res.status(200).json({
      code: 200,
      status: "success",
      message: "Course deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      code: 500,
      status: error.message,
    });
  }
};

//soft delete user courses
const softDeleteUserCourses = async (req, res) => {
  try {
    const { id } = req.params;
    const { isActive } = req.body;
    const userCourse = await UsersCourses.findOne({ where: { idUsers: id } });

    if (!userCourse) {
      return res.status(404).json({
        code: 404,
        status: "failed",
        message: "User not found",
      });
    }

    await UsersCourses.update({ isActive: isActive }, { where: { idUsers: id } });
    res.status(200).json({
      code: 200,
      status: "success",
      message: "User deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      code: 500,
      status: error.message,
    });
  }
};

module.exports = {
  softDeleteUser,
  softDeleteCourse,
  softDeleteSchedule,
  softDeleteCoursesSchedules,
  softDeleteUserCourses,
};
