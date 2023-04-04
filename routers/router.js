const { user } = require("../controllers/controller")

const router = require("express").Router()

router.get("/", user)

module.exports = router