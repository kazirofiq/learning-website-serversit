const { usersCollection } = require("../mongoDBConfig/collections")

const getAllUsers = async (req, res) => {
    const users = await usersCollection().find({}).toArray()

    res.send(users)
}

module.exports = {
    getAllUsers,
}