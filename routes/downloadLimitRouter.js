
const { postResourceDownLimit, getResourceDownLimit, getADownLimitUserByUid, updateUserByIdDownLimit } = require("../controllers/downloadLimitController")
const dwonloadLimitRouter = require("express").Router()
dwonloadLimitRouter.get("/downloadDate", getADownLimitUserByUid)
dwonloadLimitRouter.patch("/:id", updateUserByIdDownLimit)
// get all resources
dwonloadLimitRouter.get("/", getResourceDownLimit)
// Post all resources
dwonloadLimitRouter.post("/", postResourceDownLimit)





module.exports = dwonloadLimitRouter