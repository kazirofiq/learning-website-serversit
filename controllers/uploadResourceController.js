const { resoursesCollection } = require("../mongoDBConfig/collections")
const { readDoc, createDoc, updateDoc, deleteDoc, readOneDoc } = require("../")

const getUploadResource = async (req, res) => {
    const reviews = await resoursesCollection().findOne({
        userEmail: req.params.email
    })
    res.send(reviews)
}

const postUploadResource = async (req, res) => {
    const result = await createDoc(req, resoursesCollection)

    res.send(result)
}




module.exports = {
    getUploadResource,
    postUploadResource,
    
}