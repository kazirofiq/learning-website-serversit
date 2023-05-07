const SSLCommerzPayment = require('sslcommerz-lts')
const { usersCollection } = require("../mongoDBConfig/collections")

const store_id = process.env.SSLCOMMERZ_STORE_ID
const store_passwd = process.env.SSLCOMMERZ_STORE_PASS
const server = process.env.SERVER
const is_live = true

// workshop Payment
const makeConsultationPayment = async (req, res) => {
    const user = await usersCollection().findOne({ uid: req.query.uid })

    if (user) {
        const amount = req.query.plan === "basic" ? 250 : req.query.plan === "premium" ? 500 : 750
        const data = {
            total_amount: amount,
            currency: 'BDT',
            tran_id: (new Date()).getTime(), // use unique tran_id for each api call
            success_url: `${server}/workshops/payment/success`,
            fail_url: `${server}/workshops/payment/failure`,
            cancel_url: `${server}/workshops/payment/cancel`,
            ipn_url: `${server}/workshops/payment/ipn`,
            cus_name: user.name,
            cus_email: user.email,
            cus_phone: user.phone,
        }

        const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live)

        sslcz.init(data).then(apiResponse => {
            data.uid = user.uid
            data.plan = req.query.plan
            req.app.set("data", data)
            let GatewayPageURL = apiResponse.GatewayPageURL
            res.redirect(GatewayPageURL)
        })
    } else {
        res.send({})
    }
}

const consultationPaymentSuccess = async (req, res) => {

    const { tran_id } = req.app.get('data')
    const data = {
        tran_id,
        status: "success"
    }
    const result = await usersCollection().updateOne(
        { uid: req.app.get('data').uid },
        { $set: { consultPlan: req.app.get('data').plan } }
    )
    const queryString = Object.keys(data).map(key => key + '=' + data[key]).join('&')
    res.redirect(`https://learnwithrakib.pro/consultation?${queryString}`)
}

const consultationPaymentFailure = async (req, res) => {
    res.redirect("https://learnwithrakib.pro/consultation?status=failure")
}

const consultationPaymentCancel = async (req, res) => {
    res.redirect("https://learnwithrakib.pro/consultation?status=cancelled")
}

const consultationPaymentIpn = async (req, res) => {
    res.redirect("https://learnwithrakib.pro/consultation?status=ipn")
}

module.exports = {
    makeConsultationPayment,
    consultationPaymentSuccess,
    consultationPaymentFailure,
    consultationPaymentCancel,
    consultationPaymentIpn,
}