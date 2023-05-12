const { getAllAssignment } = require("../controllers/assignmentController")

const assignmentRouter = require("express").Router()

// get result
assignmentRouter.get("/", getAllAssignment)





module.exports = assignmentRouter