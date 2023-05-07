const { client } = require("./mongoClient")

const usersCollection = () => client().db("lwrDB").collection("users")
const coursesCollection = () => client().db("lwrDB").collection("courses")
const reviewsCollection = () => client().db("lwrDB").collection("reviews")
const modulesCollection = () => client().db("lwrDB").collection("modules")
const contentsCollection = () => client().db("lwrDB").collection("contents")

module.exports = {
    usersCollection,
    coursesCollection,
    reviewsCollection,
    modulesCollection,
    contentsCollection
}