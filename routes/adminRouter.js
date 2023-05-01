const { getAllUsers, saveUser, updateUser, deleteUser, getAUser, getAUserByUid } = require("../controllers/userController")

const userRouter = require("express").Router()

// get a user by uid
userRouter.get("/uid", getAUserByUid)


module.exports = userRouter