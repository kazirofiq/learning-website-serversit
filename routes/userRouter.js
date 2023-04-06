const { getAllUsers, saveUser, updateUser, deleteUser, getAUser } = require("../controllers/userController")

const userRouter = require("express").Router()

// get all users
userRouter.get("/", getAllUsers)

// save a user
userRouter.post("/", saveUser)

// update a user by uid
userRouter.patch("/:id", updateUser)

// delete a user by uid
userRouter.delete("/:id", deleteUser)

// get a user by uid
userRouter.get("/:id", getAUser)

module.exports = userRouter