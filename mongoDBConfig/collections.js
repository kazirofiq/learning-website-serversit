const { client } = require("./mongoClient")

const adminsCollection = () => client().db("lwrDB").collection("admins")
const usersCollection = () => client().db("lwrDB").collection("users")
const coursesCollection = () => client().db("lwrDB").collection("courses")
const reviewsCollection = () => client().db("lwrDB").collection("reviews")
const ImportantLinkCollection = () => client().db("lwrDB").collection("importantLink");
const cuponCollection = () => client().db("lwrDB").collection("coupons");
const couponsCollection = () => client().db("lwrDB").collection("coupons")
const modulesCollection = () => client().db("lwrDB").collection("modules")
const contentsCollection = () => client().db("lwrDB").collection("contents")

module.exports = {
    adminsCollection,
    usersCollection,
    coursesCollection,
    reviewsCollection,
    ImportantLinkCollection,
    cuponCollection,
    couponsCollection,
    modulesCollection,
    contentsCollection,
}