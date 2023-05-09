const { getTaskList, saveTaskList, updateTaskList, deleteTaskList } = require("../controllers/TaskListController")


const taskListRouter = require("express").Router()

// get all reviews
taskListRouter.get("/:email", getTaskList)

// // save a review
taskListRouter.post("/", saveTaskList)

// // update a review by uid
taskListRouter.patch("/:id", updateTaskList)

// // delete a review by uid
taskListRouter.delete("/:email", deleteTaskList)


module.exports = taskListRouter