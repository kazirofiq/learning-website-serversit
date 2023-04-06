const { client } = require("./mongoClient")

const usersCollection = () => client().db("lwrDB").collection("users")
const coursesCollection = () => client().db("lwrDB").collection("courses")

module.exports = {
    usersCollection,
    coursesCollection,
}