const { usersCollection } = require("../mongoDBConfig/collections")
// cons { readDoc, createDoc, updateDoc, deleteDoc, readOneDoc } = require("../utils/mongoQueries")



const getAnAdminByUid = async (req, res) => {
    const result = await usersCollection().findOne({
        uid: req.query.uid
    })

    res.send(result || {})
}

module.exports = {
    getAllUsers,
    saveUser,
    updateUser,
    deleteUser,
    getAUser,
    getAUserByUid,
}