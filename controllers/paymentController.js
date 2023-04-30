const SSLCommerzPayment = require('sslcommerz-lts')
const store_id = process.env.SSLCOMMERZ_STORE_ID
const store_passwd = process.env.SSLCOMMERZ_STORE_PASS
const server = process.env.SERVER
const is_live = true

const makePayment = async (req, res) => {
    const data = {
        total_amount: 05,
        currency: 'BDT',
        tran_id: 'REF123', // use unique tran_id for each api call
        success_url: `${server}/payment/success`,
        fail_url: `${server}/payment/failure`,
        cancel_url: `${server}/payment/cancel`,
        ipn_url: `${server}/payment/ipn`,
        shipping_method: 'Courier',
        product_name: 'Computer.',
        product_category: 'Electronic',
        product_profile: 'general',
        cus_name: 'Customer Name',
        cus_email: 'customer@example.com',
        cus_add1: 'Dhaka',
        cus_add2: 'Dhaka',
        cus_city: 'Dhaka',
        cus_state: 'Dhaka',
        cus_postcode: '1000',
        cus_country: 'Bangladesh',
        cus_phone: '01306772769',
        cus_fax: '01306772769',
        ship_name: 'Customer Name',
        ship_add1: 'Dhaka',
        ship_add2: 'Dhaka',
        ship_city: 'Dhaka',
        ship_state: 'Dhaka',
        ship_postcode: 1000,
        ship_country: 'Bangladesh',
    }
    const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live)

    sslcz.init(data).then(apiResponse => {
        req.app.set("data", data)
        let GatewayPageURL = apiResponse.GatewayPageURL
        res.redirect(GatewayPageURL)
    })
}

const paymentSuccess = async (req, res) => {
    const { tran_id } = req.app.get('data')
    const data = {
        tran_id,
        status: "success"
    }
    const queryString = Object.keys(data).map(key => key + '=' + data[key]).join('&')
    res.redirect(`http://localhost:3000/payment?${queryString}`)
}

const paymentFailure = async (req, res) => {
    res.redirect("http://localhost:3000/payment?status=failure")
}

const paymentCancel = async (req, res) => {
    res.redirect("http://localhost:3000/payment?status=cancelled")
}

const paymentIpn = async (req, res) => {
    res.redirect("http://localhost:3000/payment?status=ipn")
}


module.exports = {
    makePayment,
    paymentSuccess,
    paymentFailure,
    paymentCancel,
    paymentIpn,
}