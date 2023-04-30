const { coursesCollection } = require("../mongoDBConfig/collections")
const { readDoc, createDoc, updateDoc, deleteDoc, readOneDoc } = require("../utils/mongoQueries")

const getAllCourses = async (req, res) => {
    const courses = await readDoc(coursesCollection)

    res.send(courses)
}

const saveCourse = async (req, res) => {
    const result = await createDoc(req, coursesCollection)

    res.send(result)
}

const updateCourse = async (req, res) => {
    const result = await updateDoc(req, coursesCollection)

    res.send(result)
}

const deleteCourse = async (req, res) => {
    const result = await deleteDoc(req, coursesCollection)

    res.send(result)
}

const getACourse = async (req, res) => {
    const result = await readOneDoc(req, coursesCollection)

    res.send(result || {})
}

const getACourses = async (req, res) => {
    const result = await readOneDoc(req, coursesCollection)

    res.send(result || {})
}

module.exports = {
    getAllCourses,
    saveCourse,
    updateCourse,
    deleteCourse,
    getACourse,
    getACourses
}