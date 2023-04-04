const { client } = require("./mongoClient")

const usersCollection = () => client().db("lwrDB").collection("users")

module.exports = {
    usersCollection,
}