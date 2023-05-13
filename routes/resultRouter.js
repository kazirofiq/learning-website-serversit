const { saveResult, getResult } = require("../controllers/resultController")

const resultRouter = require("express").Router()

// get result
resultRouter.get("/", getResult)

// save result
resultRouter.post("/", saveResult)




module.exports = resultRouter