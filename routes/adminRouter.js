const { getAnAdminByUid } = require("../controllers/AdminController")

const adminRouter = require("express").Router()

// get a user by uid
adminRouter.get("/uid", getAnAdminByUid)


module.exports = adminRouter