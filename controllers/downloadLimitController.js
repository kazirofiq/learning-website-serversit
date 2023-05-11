
const { ObjectId } = require("mongodb")
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
    const downloadDate = req.query.downloadDate
    const userEmail = req.query.userEmail
    const result = await resoursesDownLimitCollection().findOne({ downloadDate: downloadDate, userEmail: userEmail })

    res.send(result || {})
}
const updateUserByIdDownLimit = async (req, res) => {
    const id = req.params.id

    const result = await resoursesDownLimitCollection().updateOne(
        {
            _id: new ObjectId(id)
        },
        {
            $set: req.body
        }
    )

    res.send(result)
}

const getDownLimit = async (req, res) => {
    const reviews = await resoursesDownLimitCollection().find({
        email: req.params.email
    }).toArray();
    res.send(reviews)
}

const saveDownlimit = async (req, res) => {
    const findQuery = await resoursesDownLimitCollection().findOne({ [Object.keys(req.body)[0]]: { "$exists": true } });

    if (findQuery) {
        const result = await resoursesDownLimitCollection().updateOne(
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

    const result = await createDoc(req, resoursesDownLimitCollection);
    res.send(result)
}
module.exports = {
    postResourceDownLimit,
    getResourceDownLimit,
    getADownLimitUserByUid,
    updateUserByIdDownLimit,
    getDownLimit,
    saveDownlimit

}