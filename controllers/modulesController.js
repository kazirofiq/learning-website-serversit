const { contentsCollection, modulesCollection } = require("../mongoDBConfig/collections")
const { createDoc, readDoc, updateDoc } = require("../utils/mongoQueries")
const { ObjectId } = require("mongodb")

const getAllModules = async (req, res) => {
    const modules = await readDoc(modulesCollection)
    res.send(modules)
}

const getLastModuleNo = async (req, res) => {
    const modules = await modulesCollection().find({ courseId: req.params.id }).sort({ "moduleNo": -1 }).limit(1).toArray()
    res.send({ moduleNo: modules[0]?.moduleNo })
}

const getAllModulesInCourse = async (req, res) => {
    const modules = await modulesCollection().find({ courseId: req.params.id }).sort({ "moduleNo": 1 }).toArray()
    res.send(modules)
}

const getAllContents = async (req, res) => {
    const contents = await readDoc(contentsCollection)
    res.send(contents)
}

const getContent = async (req, res) => {
    const id = (req.params.number)
    const result = await contentsCollection().findOne({ _id: new ObjectId(id) })
    res.send(result)
}

const saveModules = async (req, res) => {
    const result = await modulesCollection().insertMany(req.body)

    res.send(result)
}

const saveContent = async (req, res) => {
    const result = await createDoc(req, contentsCollection)

    res.send(result)
}

const updateModule = async (req, res) => {
    const result = await updateDoc(req, modulesCollection)

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
    getAllModules,
    getAllContents,
    getContent,
    getLastModuleNo,
    getAllModulesInCourse,
    updateModule,
}