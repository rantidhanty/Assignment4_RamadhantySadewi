const { User, Courses, Schedules } = require("@/models");
const { where } = require("sequelize");

//getAllUsersCoursesSchedules
const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: ["idUsers", "nameUsers", "email"],
      include: [
        {
          model: Courses,
          as: "courses",
          through: { attributes: [] },
          include: [
            {
              model: Schedules,
              as: "Schedules",
              through: { attributes: [] },
            },
          ],
        },
      ],
      where: { isActive: false },
    });
    return res.status(200).json({
      code: 200,
      status: "success",
      data: users,
    });
  } catch (error) {
    return res.status(500).json({
      code: 500,
      status: "failed",
      message: error.message,
    });
  }
};

//getAllUsersCoursesSchedules By ID
const getAllUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({
      attributes: ["idUsers", "nameUsers", "email"],
      where: { idUsers: id },
      include: [
        {
          model: Courses,
          as: "courses",
          through: { attributes: [] },
          include: [
            {
              model: Schedules,
              as: "Schedules",
              through: { attributes: [] },
            },
          ],
        },
      ],
    });
    return res.status(200).json({
      code: 200,
      status: "OK",
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

//get all courses schedules user
const getAllCourses = async (req, res) => {
  try {
    const courses = await Courses.findAll({
      attributes: [
        "idCourses",
        "nameCourses",
        "codeCourses",
        "priceCourses",
        "description",
        "instructor",
      ],
      include: [
        {
          model: Schedules,
          as: "Schedules",
          through: { attributes: [] },
        },
        {
          model: User,
          as: "Users",
          through: { attributes: [] },
        },
      ],
    });
    res.status(200).json({
      status: "success",
      code: 200,
      data: courses,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      code: 500,
      message: error.message,
    });
  }
};

//get all courses schedules user by ID
const getAllCoursesById = async (req, res) => {
  try {
    const { id } = req.params;
    const courses = await Courses.findOne({
      attributes: [
        "idCourses",
        "nameCourses",
        "codeCourses",
        "priceCourses",
        "description",
        "instructor",
      ],
      where: { idCourses: id },
      include: [
        {
          model: Schedules,
          as: "Schedules",
          through: { attributes: [] },
        },
        {
          model: User,
          as: "Users",
          through: { attributes: [] },
        },
      ],
    });
    res.status(200).json({
      status: "success",
      code: 200,
      data: courses,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      code: 500,
      message: error.message,
    });
  }
};

//get all schedules courses
const getAllSchedules = async (req, res) => {
  try {
    const schedules = await Schedules.findAll({
      attributes: ["idSchedules", "dataSchedules", "timeSchedules"],
      include: [
        {
          model: Courses,
          as: "Courses",
          through: { attributes: [] },
        },
      ],
    });
    res.status(200).json({
      status: "success",
      code: 200,
      data: schedules,
    });
  } catch {
    res.status(500).json({
      status: "error",
      code: 500,
      message: error.message,
    });
  }
};

//get all schedules courses ById
const getAllSchedulesById = async (req, res) => {
  try {
    const { id } = req.params;
    const schedules = await Schedules.findOne({
      attributes: ["idSchedules", "dataSchedules", "timeSchedules"],
      where: { idSchedules: id },
      include: [
        {
          model: Courses,
          as: "Courses",
          through: { attributes: [] },
        },
      ],
    });
    res.status(200).json({
      status: "succes",
      code: 200,
      data: schedules,
    });
  } catch (error) {
    res.status(200).json({
      status: "error",
      code: 500,
      message: error.message,
    });
  }
};

module.exports = {
  getAllUsers,
  getAllCourses,
  getAllSchedules,
  getAllUserById,
  getAllCoursesById,
  getAllSchedulesById,
};
