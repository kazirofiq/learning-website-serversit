const { saveWorkshop, saveWorkshopModule, workshopPaymentSuccess, workshopPaymentFailure, workshopPaymentCancel, workshopPaymentIpn, makeWorkshopPayment } = require("../controllers/workshopController")

const workshopRouter = require("express").Router()

// save a wokshop
workshopRouter.post("/", saveWorkshop)

// save wokshop module
workshopRouter.post("/module", saveWorkshopModule)

// save wokshop module
workshopRouter.post("/payment/success", workshopPaymentSuccess)

// save wokshop module
workshopRouter.post("/payment/failure", workshopPaymentFailure)

// save wokshop module
workshopRouter.post("/payment/cancel", workshopPaymentCancel)

// save wokshop module
workshopRouter.post("/payment/ipn", workshopPaymentIpn)

// save wokshop module
workshopRouter.get("/payment", makeWorkshopPayment)


module.exports = workshopRouter