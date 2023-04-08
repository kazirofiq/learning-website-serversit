const { getAllReviews, saveReview, updateReview, deleteReview, getAReview } = require("../controllers/reviewsController")

const reviewsRouter = require("express").Router()

// get all reviews
reviewsRouter.get("/", getAllReviews)

// // save a review
reviewsRouter.post("/", saveReview)

// // update a review by uid
reviewsRouter.patch("/:id", updateReview)

// // delete a review by uid
reviewsRouter.delete("/:id", deleteReview)

// // get a review by uid
reviewsRouter.get("/:id", getAReview)

module.exports = reviewsRouter