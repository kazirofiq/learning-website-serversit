const { saveContent, saveQuiz, saveModules, saveAssignment, getAllModules, getAllContents, getContent } = require("../controllers/modulesController")

const modulesRouter = require("express").Router()

// save modules quiz
modulesRouter.post("/contents/quiz", saveQuiz)

// save modules assignment
modulesRouter.post("/contents/assignment", saveAssignment)

// save modules content
modulesRouter.post("/contents", saveContent)

// save all modules
modulesRouter.post("/", saveModules)

// Get contents
modulesRouter.get("/contents", getAllContents)

// Get single module
modulesRouter.get("/:number", getContent)

// get all modules
modulesRouter.get("/", getAllModules)


module.exports = modulesRouter