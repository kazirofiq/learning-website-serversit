const {getUploadResource, postUploadResource } = require("../controllers/uploadResourceController")
const resourceRouter = require("express").Router()
// get all resources
resourceRouter.get("/", getUploadResource)
// Post all resources
resourceRouter.get("/", postUploadResource)

module.exports = resourceRouter