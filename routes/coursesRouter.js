const { getAllCourses, saveCourse, updateCourse, deleteCourse, getACourse, courseComplete } = require("../controllers/coursesController")

const coursesRouter = require("express").Router()

// set course complete
coursesRouter.post("/completed", courseComplete)

// update a course by uid
coursesRouter.patch("/:id", updateCourse)

// delete a course by uid
coursesRouter.delete("/:id", deleteCourse)

// get a course by uid
coursesRouter.get("/:id", getACourse)

// get all courses
coursesRouter.get("/", getAllCourses)

// save a course
coursesRouter.post("/", saveCourse)

module.exports = coursesRouter