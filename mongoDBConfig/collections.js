const { client } = require("./mongoClient")

const usersCollection = () => client().db("lwrDB").collection("users")
const coursesCollection = () => client().db("lwrDB").collection("courses")
const reviewsCollection = () => client().db("lwrDB").collection("reviews")
const couponsCollection = () => client().db("lwrDB").collection("coupons")

module.exports = {
    usersCollection,
    coursesCollection,
    reviewsCollection,
    couponsCollection,
}