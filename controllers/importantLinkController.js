const { ImportantLinkCollection } = require("../mongoDBConfig/collections")
const { readDoc, createDoc, updateDoc, deleteDoc, readOneDoc } = require("../utils/mongoQueries")

const getImportantLink = async (req, res) => {
    const reviews = await ImportantLinkCollection().findOne({
        userEmail: req.params.email
    })
    res.send(reviews)
}

const saveImportantLink = async (req, res) => {
    const result = await createDoc(req, ImportantLinkCollection)

    res.send(result)
}

const updateImportantLink = async (req, res) => {
    const result = await updateDoc(req, ImportantLinkCollection)

    res.send(result)
}

const deleteImportantLink = async (req, res) => {
    const result = await deleteDoc(req, ImportantLinkCollection)
    
    res.send(result)
}


module.exports = {
    getImportantLink,
    saveImportantLink,
    updateImportantLink,
    deleteImportantLink,
}