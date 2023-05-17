const { resultsCollection } = require("../mongoDBConfig/collections")

const getAllAssignment = async (req, res) => {
    const result = await resultsCollection()
        .aggregate([
            {
                $match: { resultOf: "assignment" }
            },
            {
                $group: {
                    _id: {
                        studentUid: "$studentUid",
                    },
                    totalSubmitted: { $count: {} },
                    driveLink: { "$last": "$driveLink" },
                    moduleNo: { "$last": "$moduleNo" },
                    courseId: { "$last": "$courseId" },
                    submittedTime: { "$last": "$submittedTime" },
                    marks: { "$last": "$marks" },
                    isChecked: { "$last": "$isChecked" },
                },
            },
            {
                $project: {
                    _id: 0,
                    studentUid: "$_id.studentUid",
                    totalSubmitted: "$totalSubmitted",
                    driveLink: "$driveLink",
                    moduleNo: "$moduleNo",
                    courseId: "$courseId",
                    submittedTime: "$submittedTime",
                    marks: "$marks",
                    isChecked: "$isChecked",
                }
            },
            { $sort: { totalSubmitted: -1 } }
        ]).toArray()

    res.send(result)
}
const getAssignments = async (req, res) => {
    const result = await resultsCollection()
        .aggregate([
            {
                $match: { resultOf: "assignment", studentUid: req.query.uid, isChecked: true }
            },
            {
                $group: {
                    _id: {
                        studentUid: "$studentUid",
                    },
                    totalSubmitted: { $count: {} },
                    totalMarks: { $sum: { $toInt: "$marks" } },
                },
            },
            {
                $project: {
                    _id: 0,
                    studentUid: "$_id.studentUid",
                    totalSubmitted: "$totalSubmitted",
                    average: { $round: [{ $divide: ["$totalMarks", "$totalSubmitted"] }, 2] }
                }
            },
            { $sort: { totalSubmitted: -1 } }
        ]).toArray()

    res.send(result)
}

const updateAssignmentMark = async (req, res) => {
    console.log(req.query);
    const { studentUid, moduleNo, courseId } = req.query
    const result = await resultsCollection().updateOne(
        { studentUid, moduleNo: Number(moduleNo), courseId, resultOf: "assignment" },
        { $set: { "marks": req.body.marks, "isChecked": req.body.isChecked } }
    )

    res.send(result)

}

module.exports = {
    getAllAssignment,
    getAssignments,
    updateAssignmentMark
}