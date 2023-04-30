const { getACoupon } = require("../controllers/couponsController")

const couponRouter = require("express").Router()

// get a coupon by coupon
couponRouter.get("/", getACoupon)


module.exports = couponRouter