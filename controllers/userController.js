const { usersCollection } = require("../mongoDBConfig/collections")
const { readDoc, createDoc, updateDoc, deleteDoc, readOneDoc } = require("../utils/mongoQueries")

const getAllUsers = async (req, res) => {
    const users = await readDoc(usersCollection)
    // const r = await usersCollection().updateMany({ paidPremium: true }, {
    //     $set: {
    //         enrolledCourses: [
    //             {
    //                 id: "6454e5e7e4b19a51a8765225",
    //                 completed: 0
    //             }
    //         ]
    //     }
    // })
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
    const query = req.query.downloadDate ? { downloadDate: req.query.downloadDate } : req.query.uid ? { uid: req.query.uid } : { [Object.keys(req.query)[0]]: [req.query[Object.keys(req.query)[0]]] }
    const result = await usersCollection().findOne(query)

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