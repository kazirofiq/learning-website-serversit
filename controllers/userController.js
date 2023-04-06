const { usersCollection } = require("../mongoDBConfig/collections")
const { readDoc, createDoc, updateDoc, deleteDoc } = require("../utils/mongoQueries")

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

const deleteUser = async (req, res) => {
    const result = await deleteDoc(req, usersCollection)

    res.send(result)
}

module.exports = {
    getAllUsers,
    saveUser,
    updateUser,
    deleteUser,
}