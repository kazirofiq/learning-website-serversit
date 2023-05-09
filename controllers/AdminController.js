const { adminsCollection } = require("../mongoDBConfig/collections")

const getAnAdminByUid = async (req, res) => {
    const result = await adminsCollection().findOne({
        uid: req.query.uid
    })

    res.send(result || {})
}

module.exports = {
    getAnAdminByUid,
}