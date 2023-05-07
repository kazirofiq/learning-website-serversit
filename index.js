const express = require("express")
const cors = require("cors")
const userRouter = require("./routes/userRouter")
const { connect } = require("./mongoDBConfig/mongoClient")
const coursesRouter = require("./routes/coursesRouter")
const reviewsRouter = require("./routes/reviewsRouter")
const videosRouter = require("./routes/videosRouter")
const jwtRouter = require("./routes/jwtRouter")
const paymentRouter = require("./routes/paymentRouter")
const couponRouter = require("./routes/couponsRouter")
const resourceRouter = require("./routes/resourceRouter")
const dwonloadLimitRouter = require("./routes/downloadLimitRouter")

const port = process.env.PORT || 5000
const app = express()

// middlewares
app.use(cors())
app.use(express.json())

connect()
    .then(() => {

        // users routes
        app.use("/users", userRouter) 

        // payment
        app.use("/payment", paymentRouter)

        // courses routes
        app.use("/courses", coursesRouter)

        // reviews routes
        app.use("/reviews", reviewsRouter)

        // videos routes
        app.use("/videos", videosRouter)

        // admin routes
        app.use("/admin", videosRouter)

        // JWT Verify
        app.use("/jwt", jwtRouter)

        // coupons routes
        app.use("/coupons", couponRouter)
         // resource routes
        app.use("/resource", resourceRouter)
        app.use("/downLimit", dwonloadLimitRouter)
       
        
        
         
        
    })
    .catch(err => console.log(err))

app.get("/", (req, res) => {
    res.send("Learn With Rakib server is running")
})

// app.get("*", (req, res) => {
//     res.send("404 : Not found")
// })

app.listen(port, () => console.log("Server: I am on 😁 - port:", port))