const { getAllAssignment, updateAssignmentMark } = require("../controllers/assignmentController")

const assignmentRouter = require("express").Router()

// get result
assignmentRouter.get("/", getAllAssignment)
assignmentRouter.patch("/", updateAssignmentMark)





module.exports = assignmentRouter