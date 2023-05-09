const { saveFAQ } = require("../controllers/faqController")

const faqRouter = require("express").Router()

faqRouter.post("/", saveFAQ)

module.exports = faqRouter