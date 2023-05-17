const { getAllAssignment, updateAssignmentMark, getAssignments } = require("../controllers/assignmentController")

const assignmentRouter = require("express").Router()

// get result
assignmentRouter.get("/", getAllAssignment)
assignmentRouter.get("/all", getAssignments)
assignmentRouter.patch("/", updateAssignmentMark)





module.exports = assignmentRouter