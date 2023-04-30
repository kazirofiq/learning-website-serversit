const { getAllUsers, saveUser, updateUser, deleteUser, getAUser, getAUserByUid, updateUserByUid } = require("../controllers/userController")

const userRouter = require("express").Router()
userRouter.get("/uid", getAUserByUid)
// update a user by uid
userRouter.patch("/uid", updateUserByUid)
// get all users
userRouter.get("/", getAllUsers)

// save a user
userRouter.post("/", saveUser)

// delete a user by uid
userRouter.delete("/:id", deleteUser)

// get a user by uid
userRouter.get("/:id", getAUser)


module.exports = userRouter