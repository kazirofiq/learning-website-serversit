const { resoursesCollection } = require("../mongoDBConfig/collections")
const { readDoc, createDoc, updateDoc, deleteDoc, readOneDoc } = require("../utils/mongoQueries")

const getUploadResource = async (req, res) => {
    const resource = await readDoc(resoursesCollection)

    res.send(resource)
}

const postUploadResource = async (req, res) => {
    const result = await createDoc(req, resoursesCollection)

    res.send(result)
}




module.exports = {
    getUploadResource,
    postUploadResource,
    
}