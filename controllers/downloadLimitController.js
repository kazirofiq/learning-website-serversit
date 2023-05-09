
const { resoursesDownLimitCollection } = require("../mongoDBConfig/collections")
const { readDoc, createDoc, updateDoc, deleteDoc, readOneDoc } = require("../utils/mongoQueries")

const getResourceDownLimit = async (req, res) => {
    const resource = await readDoc(resoursesDownLimitCollection)

    res.send(resource)
}

const postResourceDownLimit = async (req, res) => {
    const result = await createDoc(req, resoursesDownLimitCollection)

    res.send(result)
}
const getADownLimitUserByUid = async (req, res) => {
    const result = await resoursesDownLimitCollection().findOne({
        userEmail: req.query.userEmail
    })

    res.send(result || {})
}
const updateUserByUidDownLimit = async (req, res) => {
    const result = await resoursesDownLimitCollection().updateOne(
        {
            UserUid: req.query.UserUid
        },
        {
            $set: req.body
        }
    )

    res.send(result)
}

module.exports = {
    postResourceDownLimit,
    getResourceDownLimit,
    getADownLimitUserByUid,
    updateUserByUidDownLimit
    
}