const { taskListCollections } = require("../mongoDBConfig/collections")
const { readDoc, createDoc, updateDoc, deleteDoc, readOneDoc } = require("../utils/mongoQueries")

const getTaskList = async (req, res) => {
    const reviews = await taskListCollections().find({
        email: req.params.email
    }).toArray();
    res.send(reviews)
}

const saveTaskList = async (req, res) => {
    const findQuery = await taskListCollections().findOne({ [Object.keys(req.body)[0]]: { "$exists": true } });

    if (findQuery) {
        const result = await taskListCollections().updateOne(
            {
                _id: findQuery._id
            },
            {
                $push: { [Object.keys(req.body)[0]]: Object.values(req.body)[0][0] }
            }
        )
        res.send(result);
        return
    }

    const result = await createDoc(req, taskListCollections);
    res.send(result)
}

const updateTaskList = async (req, res) => {
    const result = await updateDoc(req, taskListCollections)

    res.send(result)
}

const deleteTaskList = async (req, res) => {
    const result = await taskListCollections().deleteMany({
        email: req.params.email
    })
    res.send(result)
}

module.exports = {
    getTaskList,
    saveTaskList,
    updateTaskList,
    deleteTaskList,
}