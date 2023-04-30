const { getImportantLink, saveImportantLink, updateImportantLink, deleteImportantLink } = require("../controllers/importantLinkController")

const importantLinkRouter = require("express").Router()

// get all reviews
importantLinkRouter.get("/:email", getImportantLink)

// // save a review
importantLinkRouter.post("/", saveImportantLink)

// // update a review by uid
importantLinkRouter.patch("/:id", updateImportantLink)

// // delete a review by uid
importantLinkRouter.delete("/:id", deleteImportantLink)


module.exports = importantLinkRouter