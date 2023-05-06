const { getAddNoteTask, saveAddNoteTask, updateAddNoteTask, deleteAddNoteTask } = require("../controllers/taskListNoteController")

const taskListNoteRouter = require("express").Router()

// get all reviews
taskListNoteRouter.get("/:email", getAddNoteTask)

// // save a review
taskListNoteRouter.post("/", saveAddNoteTask)

// // update a review by uid
taskListNoteRouter.patch("/:id", updateAddNoteTask)

// // delete a review by uid
taskListNoteRouter.delete("/:id", deleteAddNoteTask)


module.exports = taskListNoteRouter