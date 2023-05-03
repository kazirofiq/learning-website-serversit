const { taskListCollections } = require("../mongoDBConfig/collections")
const { readDoc, createDoc, updateDoc, deleteDoc, readOneDoc } = require("../utils/mongoQueries")

const getTaskList = async (req, res) => {
    const reviews = await taskListCollections().find({
        email: req.params.email
    }).toArray();
    res.send(reviews)
}

const saveTaskList = async (req, res) => {
    const result = await createDoc(req, taskListCollections)

    res.send(result)
}

const updateTaskList = async (req, res) => {
    const result = await updateDoc(req, taskListCollections)

    res.send(result)
}

const deleteTaskList = async (req, res) => {
    const result = await deleteDoc(req, taskListCollections)
    
    res.send(result)
}


module.exports = {
    getTaskList,
    saveTaskList,
    updateTaskList,
    deleteTaskList,
}