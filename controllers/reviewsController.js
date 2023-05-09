const { reviewsCollection } = require("../mongoDBConfig/collections")
const { userController } = require("../mongoDBConfig/collections")
const { readDoc, createDoc, updateDoc, deleteDoc, readOneDoc } = require("../utils/mongoQueries")

const getAllReviews = async (req, res) => {
    const reviews = await readDoc(reviewsCollection)

    res.send(reviews)
}

const saveReview = async (req, res) => {
    const result = await createDoc(req, reviewsCollection)

    res.send(result)
}

const updateReview = async (req, res) => {
    const result = await updateDoc(req, reviewsCollection)

    res.send(result)
}

const deleteReview = async (req, res) => {
    const result = await deleteDoc(req, reviewsCollection)

    res.send(result)
}

const getAReview = async (req, res) => {
    const result = await readOneDoc(req, reviewsCollection)

    res.send(result || {})
}

module.exports = {
    getAllReviews,
    saveReview,
    updateReview,
    deleteReview,
    getAReview,
}