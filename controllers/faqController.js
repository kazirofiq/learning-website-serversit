const { faqsCollection } = require("../mongoDBConfig/collections")
const { createDoc } = require("../utils/mongoQueries")

const saveFAQ = async (req, res) => {
    const result = await createDoc(req, faqsCollection)

    res.send(result)
}

module.exports = {
    saveFAQ,
}