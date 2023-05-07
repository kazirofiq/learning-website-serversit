// const modules = require("../data/modules.json")
// const videos = require("../data/vedio.json")

const { ObjectId } = require("mongodb")
const { modulesCollection } = require("../mongoDBConfig/collections")
const { contentsCollection } = require("../mongoDBConfig/collections")
const { readDoc } = require("../utils/mongoQueries")

const getAllModules = async (req, res) => {
    const modules = await readDoc(modulesCollection)
    res.send(modules)
}

const getAllContents = async (req, res) => {
    const contents = await readDoc(contentsCollection)
    res.send(contents)
}

const getContent = async (req, res) => {
    const id = (req.params.number)
    const result = await contentsCollection().findOne({ _id: new ObjectId(id) })
    res.send(result)
}

// const getAllVedios = async (req, res) => {
//     res.send(videos)
// }


// const getContent = async (req, res) => {
//     const content = (req.params.number)
//     // console.log(content);
//     const result = videos.find(v => v._id === content)
//     // console.log(result);
//     res.send(result)
// }



module.exports = {
    getAllModules,
    getAllContents,
    getContent
    // getAllVedios,
    // getContent
}