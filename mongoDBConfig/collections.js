const { client } = require("./mongoClient")

const usersCollection = () => client().db("lwrDB").collection("users")
<<<<<<< HEAD
const resoursesCollection = () => client().db("lwrDB").collection("resources")

module.exports = {
    usersCollection,
    resoursesCollection,
=======
const coursesCollection = () => client().db("lwrDB").collection("courses")
const reviewsCollection = () => client().db("lwrDB").collection("reviews")
const couponsCollection = () => client().db("lwrDB").collection("coupons")

module.exports = {
    usersCollection,
    coursesCollection,
    reviewsCollection,
    couponsCollection,
>>>>>>> e8d7b4bc2f2fd7ad4fafe3926a5a351fe65f1e3c
}