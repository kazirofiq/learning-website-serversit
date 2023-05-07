const { saveWorkshop, saveWorkshopModule, workshopPaymentSuccess, workshopPaymentFailure, workshopPaymentCancel, workshopPaymentIpn, makeWorkshopPayment } = require("../controllers/workshopController")

const workshopRouter = require("express").Router()

// save a workshop
workshopRouter.post("/", saveWorkshop)

// save workshop module
workshopRouter.post("/module", saveWorkshopModule)

// workshop payment
workshopRouter.post("/payment/success", workshopPaymentSuccess)

// workshop payment
workshopRouter.post("/payment/failure", workshopPaymentFailure)

// workshop payment
workshopRouter.post("/payment/cancel", workshopPaymentCancel)

// workshop payment
workshopRouter.post("/payment/ipn", workshopPaymentIpn)

// workshop payment
workshopRouter.get("/payment", makeWorkshopPayment)


module.exports = workshopRouter