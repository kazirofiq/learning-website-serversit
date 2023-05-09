const SSLCommerzPayment = require('sslcommerz-lts')
const { createDoc, readDoc, readOneDoc } = require("../utils/mongoQueries")
const { usersCollection, workshopsCollection, workshopModulesCollection } = require("../mongoDBConfig/collections")

const store_id = process.env.SSLCOMMERZ_STORE_ID
const store_passwd = process.env.SSLCOMMERZ_STORE_PASS
const server = process.env.SERVER
const is_live = true


const getAllWorkshop = async (req, res) => {
    const result = await readDoc(workshopsCollection)
    res.send(result)
}

const getAWorkshops = async (req, res) => {
    const result = await readOneDoc(req, workshopsCollection)
    res.send(result)
}
const saveWorkshop = async (req, res) => {
    const result = await createDoc(req, workshopsCollection)
    res.send(result)
}

const saveWorkshopModule = async (req, res) => {
    const result = await createDoc(req, workshopModulesCollection)

    res.send(result)
}

// workshop Payment
const makeWorkshopPayment = async (req, res) => {
    const user = await usersCollection().findOne({ uid: req.query.uid })

    if (user) {
        const amount = req.query.amount
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
            data.workshopId = req.query.workshopId
            req.app.set("data", data)
            let GatewayPageURL = apiResponse.GatewayPageURL
            res.redirect(GatewayPageURL)
        })
    } else {
        res.send({})
    }
}

const workshopPaymentSuccess = async (req, res) => {

    const { tran_id } = req.app.get('data')
    const data = {
        tran_id,
        status: "success"
    }
    const result = await usersCollection().updateOne(
        { uid: req.app.get('data').uid },
        { $push: { enrolledWorkshops: req.app.get('data').workshopId } }
    )
    const queryString = Object.keys(data).map(key => key + '=' + data[key]).join('&')
    res.redirect(`https://learnwithrakib.pro/upcomingdetails?${queryString}`)
}

const workshopPaymentFailure = async (req, res) => {
    res.redirect("https://learnwithrakib.pro/upcomingdetails?status=failure")
}

const workshopPaymentCancel = async (req, res) => {
    res.redirect("https://learnwithrakib.pro/upcomingdetails?status=cancelled")
}

const workshopPaymentIpn = async (req, res) => {
    res.redirect("https://learnwithrakib.pro/upcomingdetails?status=ipn")
}

module.exports = {
    saveWorkshop,
    saveWorkshopModule,
    makeWorkshopPayment,
    workshopPaymentSuccess,
    workshopPaymentFailure,
    workshopPaymentCancel,
    workshopPaymentIpn,
    getAllWorkshop,
    getAWorkshops,
}