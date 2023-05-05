const { contentsCollection, modulesCollection } = require("../mongoDBConfig/collections")
const { createDoc } = require("../utils/mongoQueries")

const saveModules = async (req, res) => {
    const result = await modulesCollection().insertMany(req.body)

    res.send(result)
}

const saveContent = async (req, res) => {
    const result = await createDoc(req, contentsCollection)

    res.send(result)
}

const saveQuiz = async (req, res) => {
    const quizData = req.body.map(quiz => ({ quizData: quiz.quiz.questions }))
    const result = await contentsCollection().insertMany(quizData)
    const data = Object.keys(result.insertedIds).map((key, i) => ({ number: result.insertedIds[key], moduleNo: req.body[i].moduleNo, routeName: "quiz" }))

    res.send(data)
}

const saveAssignment = async (req, res) => {
    const result = await contentsCollection().insertMany(req.body)
    const data = Object.keys(result.insertedIds).map((key, i) => ({ number: result.insertedIds[key], moduleNo: req.body[i].moduleNo, routeName: "assignment" }))

    res.send(data)
}

module.exports = {
    saveContent,
    saveQuiz,
    saveAssignment,
    saveModules,
}