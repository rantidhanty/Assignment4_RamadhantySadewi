const express = require("express");
const {
  getAllUsers,
  getAllCourses,
  getAllSchedules,
  getAllUserById,
  getAllCoursesById,
  getAllSchedulesById,
} = require("../controller/get");
const {
  postUser,
  postCourse,
  postSchedules,
  postUserCourses,
  postCoursesSchedules,
} = require("../controller/post");
const { putUser, putCourses, putSchedule } = require("../controller/put");
const {
  deleteUser,
  deleteCourses,
  deleteSchedule,
} = require("../controller/delete");
const {
  softDeleteUser,
  softDeleteCourse,
  softDeleteSchedule,
  softDeleteCoursesSchedules,
  softDeleteUserCourses,
} = require("../controller/softDelete");

const router = express.Router();

//Method Get or Read
router.get("/users", getAllUsers);
router.get("/courses", getAllCourses);
router.get("/schedules", getAllSchedules);
router.get("/user/:id", getAllUserById);
router.get("/courses/:id", getAllCoursesById);
router.get("/schedules/:id", getAllSchedulesById);

//Method Post or Cread
router.post("/user", postUser);
router.post("/courses", postCourse);
router.post("/schedules", postSchedules);
router.post("/usercourses", postUserCourses);
router.post("/courseschedules", postCoursesSchedules);

//Method Put or Update
router.put("/user/:id", putUser);
router.put("/course/:id", putCourses);
router.put("/schedule/:id", putSchedule);

//Method Delete
router.delete("/user/:id", deleteUser);
router.delete("/course/:id", deleteCourses);
router.delete("/schedule/:id", deleteSchedule);

//Method Soft Delete
router.patch("/softdeleteuser/:id", softDeleteUser);
router.patch("/softdeletecourse/:id", softDeleteCourse);
router.patch("/softdeleteschedule/:id", softDeleteSchedule);
router.patch("/softdeletecourseschedules/:id", softDeleteCoursesSchedules);
router.patch("/softdeleteusercourses/:id", softDeleteUserCourses);

module.exports = router;
