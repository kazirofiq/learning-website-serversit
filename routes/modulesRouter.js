const { saveContent, saveQuiz, saveModules, saveAssignment } = require("../controllers/modulesController")

const modulesRouter = require("express").Router()

// save modules quiz
modulesRouter.post("/contents/quiz", saveQuiz)

// save modules assignment
modulesRouter.post("/contents/assignment", saveAssignment)

// save modules content
modulesRouter.post("/contents", saveContent)

// save all modules
modulesRouter.post("/", saveModules)


module.exports = modulesRouter