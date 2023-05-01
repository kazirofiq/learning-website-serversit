const { couponsCollection } = require("../mongoDBConfig/collections")

const getACoupon = async (req, res) => {
    const coupon = await couponsCollection().findOne({
        value: req.query.couponId
    })

    res.send(coupon || {})
}


module.exports = {
    getACoupon,
}