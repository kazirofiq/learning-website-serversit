const { saveCoupon, updateCoupon, getCoupon } = require("../controllers/CuponController")


const couponRouter = require("express").Router()

couponRouter.get("/", getCoupon)
// // save a review
couponRouter.post("/", saveCoupon)

// // update a review by uid
couponRouter.patch("/:id", updateCoupon)



module.exports = couponRouter