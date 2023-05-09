const { client } = require("./mongoClient")

const adminsCollection = () => client().db("lwrDB").collection("admins")
const usersCollection = () => client().db("lwrDB").collection("users")
const coursesCollection = () => client().db("lwrDB").collection("courses")
const reviewsCollection = () => client().db("lwrDB").collection("reviews")
const ImportantLinkCollection = () => client().db("lwrDB").collection("importantLink");
const cuponCollection = () => client().db("lwrDB").collection("coupons");
const taskListCollections = () => client().db("lwrDB").collection("myPlanerTaskList");
const addNoteTaskCollections = () => client().db("lwrDB").collection("addNoteTask");
// const couponsCollection = () => client().db("lwrDB").collection("coupons")
const couponsCollection = () => client().db("lwrDB").collection("coupons")
const modulesCollection = () => client().db("lwrDB").collection("modules")
const contentsCollection = () => client().db("lwrDB").collection("contents")
const faqsCollection = () => client().db("lwrDB").collection("faqs")
const workshopsCollection = () => client().db("lwrDB").collection("workshops")
const workshopModulesCollection = () => client().db("lwrDB").collection("workshopModules")
const resoursesCollection = () => client().db("lwrDB").collection("resources")
const resoursesDownLimitCollection = () => client().db("lwrDB").collection("resourcesDownload")

module.exports = {
    adminsCollection,
    usersCollection,
    coursesCollection,
    reviewsCollection,
    ImportantLinkCollection,
    cuponCollection,
    taskListCollections,
    addNoteTaskCollections,
    // couponsCollection,
    couponsCollection,
    modulesCollection,
    contentsCollection,
    faqsCollection,
    workshopsCollection,
    workshopModulesCollection,
    resoursesCollection,
    resoursesDownLimitCollection
}