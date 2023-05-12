const { resultsCollection } = require("../mongoDBConfig/collections")

const getAllAssignment = async (req, res) => {
    const result = await resultsCollection().aggregate([
        {
            $match: { resultOf: "assignment" }
        },
        {
            $group: {
                _id: "$_id",
                // studentUid: "$studentUid",
                totalSubmitted: { $count: {} }
            }
        }
    ]).toArray()
    // .find({}).toArray()

    res.send(result)
}

module.exports = {
    getAllAssignment,
}