const { contentsCollection } = require("../mongoDBConfig/collections")
const { createDoc } = require("../utils/mongoQueries")

const saveContent = async (req, res) => {
    const result = await createDoc(req, contentsCollection)

    res.send(result)
}

module.exports = {
    saveContent,
}