const { getAllModules, getAllContents, getContent } = require("../controllers/modulesController")

const modulesRouter = require("express").Router()

// get all modules
modulesRouter.get("/", getAllModules)

modulesRouter.get("/contents", getAllContents)

modulesRouter.get("/:number", getContent)

// modulesRouter.get("/:number", getContent)

// modulesRouter.get("/videos", getAllVedios)

// modulesRouter.get("/videos/:content", getVideo)



module.exports = modulesRouter