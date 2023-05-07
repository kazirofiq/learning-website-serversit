const {getUploadResource, postUploadResource ,getSameCategoryResouce } = require("../controllers/uploadResourceController")
const resourceRouter = require("express").Router()

// get all resources
resourceRouter.get("/", getUploadResource)
// Post all resources
resourceRouter.post("/", postUploadResource)
resourceRouter.get("/:id", getSameCategoryResouce)
// resourceRouter.get("/licencedId/:id", getAUserByPremium)



module.exports = resourceRouter