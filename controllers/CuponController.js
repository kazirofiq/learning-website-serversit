const { cuponCollection } = require("../mongoDBConfig/collections")
const { readDoc, createDoc, updateDoc, deleteDoc, readOneDoc } = require("../utils/mongoQueries")


const getCoupon = async (req, res) => {
    const reviews = await readDoc(cuponCollection);
    res.send(reviews)
}

const saveCoupon = async (req, res) => {
    const result = await createDoc(req, cuponCollection)

    res.send(result)
}

const updateCoupon = async (req, res) => {
    const result = await updateDoc(req, cuponCollection)

    res.send(result)
}

const deleteCoupon = async (req, res) => {
    const result = await deleteDoc(req, cuponCollection)
    
    res.send(result)
}


module.exports = {
    updateCoupon,
    saveCoupon,
    deleteCoupon,
    getCoupon
}