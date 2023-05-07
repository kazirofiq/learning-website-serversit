const { usersCollection } = require("../mongoDBConfig/collections")
const { readDoc, createDoc, updateDoc, deleteDoc, readOneDoc } = require("../utils/mongoQueries")

const getAllUsers = async (req, res) => {
    const users = await readDoc(usersCollection)

    res.send(users)
}

const saveUser = async (req, res) => {
    const result = await createDoc(req, usersCollection)
    res.send(result)
}

const updateUser = async (req, res) => {
    const result = await updateDoc(req, usersCollection)

    res.send(result)
}
const updateUserByUid = async (req, res) => {
    const result = await usersCollection().updateOne(
        {
            uid: req.query.uid
        },
        {
            $set: req.body
        }
    )

    res.send(result)
}

const deleteUser = async (req, res) => {
    const result = await deleteDoc(req, usersCollection)

    res.send(result)
}

const getAUser = async (req, res) => {
    const result = await readOneDoc(req, usersCollection)

    res.send(result || {})
}
const getAUserByUid = async (req, res) => {
    const result = await usersCollection().findOne({
        downloadDate: req.query.downloadDate
    })

    res.send(result || {})
}

module.exports = {
    getAllUsers,
    saveUser,
    updateUser,
    deleteUser,
    getAUser,
    getAUserByUid,
    updateUserByUid,
}