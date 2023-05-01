const { client } = require("./mongoClient")

const usersCollection = () => client().db("lwrDB").collection("users")
const resoursesCollection = () => client().db("lwrDB").collection("resources")

module.exports = {
    usersCollection,
    resoursesCollection,
}