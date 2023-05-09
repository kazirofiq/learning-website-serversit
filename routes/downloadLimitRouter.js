
const {postResourceDownLimit, getResourceDownLimit, getADownLimitUserByUid, updateUserByUidDownLimit} = require("../controllers/downloadLimitController")
const dwonloadLimitRouter = require("express").Router()
dwonloadLimitRouter.get("/userEmail", getADownLimitUserByUid)
dwonloadLimitRouter.patch("/UserUid", updateUserByUidDownLimit)
// get all resources
dwonloadLimitRouter.get("/", getResourceDownLimit)
// Post all resources
dwonloadLimitRouter.post("/", postResourceDownLimit)





module.exports = dwonloadLimitRouter