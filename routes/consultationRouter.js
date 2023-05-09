const { consultationPaymentSuccess, consultationPaymentFailure, consultationPaymentCancel, consultationPaymentIpn, makeConsultationPayment } = require("../controllers/consultationController")

const consultationRouter = require("express").Router()

// Consultation Payment
consultationRouter.post("/payment/success", consultationPaymentSuccess)

// Consultation Payment
consultationRouter.post("/payment/failure", consultationPaymentFailure)

// Consultation Payment
consultationRouter.post("/payment/cancel", consultationPaymentCancel)

// Consultation Payment
consultationRouter.post("/payment/ipn", consultationPaymentIpn)

// Consultation Payment
consultationRouter.get("/payment", makeConsultationPayment)


module.exports = consultationRouter