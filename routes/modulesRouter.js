const { saveContent } = require("../controllers/modulesController")

const modulesRouter = require("express").Router()

// save modules content
modulesRouter.post("/contents", saveContent)


module.exports = modulesRouter