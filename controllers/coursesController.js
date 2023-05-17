const { coursesCollection, usersCollection, courseCompletedCollection } = require("../mongoDBConfig/collections")
const { readDoc, createDoc, updateDoc, deleteDoc, readOneDoc } = require("../utils/mongoQueries")

const getAllCourses = async (req, res) => {
    const { draft } = req.query
    if (draft) {
        const courses = await coursesCollection().find({ draft: (draft === 'true') }).toArray()
        return res.send(courses)
    }

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

const courseComplete = async (req, res) => {
    const { uid, courseId } = req.query
    const { routeName, newCompleted, lessonId } = req.body
    const result = await usersCollection().updateOne(
        { uid, "enrolledCourses.id": courseId },
        { $set: { 'enrolledCourses.$.completed': newCompleted } }
    )

    const result2 = await courseCompletedCollection().updateOne(
        { uid, courseId, routeName },
        {
            $set: { lessonId: lessonId }
        },
        { upsert: true }
    )

    res.send(result2)
}

const continueCourse = async (req, res) => {
    const { uid, courseId } = req.query
    console.log(req.query);
    const result = await courseCompletedCollection().findOne({
        uid,
        courseId
    })
    res.send(result || {})
}

module.exports = {
    getAllCourses,
    saveCourse,
    updateCourse,
    deleteCourse,
    getACourse,
    getACourses,
    courseComplete,
    continueCourse
}