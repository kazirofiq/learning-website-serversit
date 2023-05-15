const { saveContent, saveQuiz, saveModules, saveAssignment, getAllModules, getAllContents, getContent, getLastModuleNo, getAllModulesInCourse, updateModule } = require("../controllers/modulesController")

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

// get all modules in a course
modulesRouter.post("/module/:id", updateModule)

// get all modules in a course
modulesRouter.get("/course/:id", getAllModulesInCourse)

// get last module no in a course
modulesRouter.get("/no/:id", getLastModuleNo)


module.exports = modulesRouter