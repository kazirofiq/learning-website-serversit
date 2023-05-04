const { saveContent, saveQuiz, saveModules } = require("../controllers/modulesController")

const modulesRouter = require("express").Router()

// save modules quiz
modulesRouter.post("/contents/quiz", saveQuiz)

// save modules content
modulesRouter.post("/contents", saveContent)

// save all modules
modulesRouter.post("/", saveModules)


module.exports = modulesRouter