const { resultsCollection } = require("../mongoDBConfig/collections")
const { createDoc } = require("../utils/mongoQueries")

const getResult = async (req, res) => {
    const { resultOf, courseId, moduleNo, studentUid } = req.query
    const result = await resultsCollection().findOne({
        resultOf,
        courseId,
        studentUid,
        moduleNo: Number(moduleNo),
    })

    res.send(result || {})
}

const saveResult = async (req, res) => {
    const result = await createDoc(req, resultsCollection)

    res.send(result)
}

module.exports = {
    saveResult,
    getResult
}