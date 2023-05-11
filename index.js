const express = require("express")
const cors = require("cors")
const userRouter = require("./routes/userRouter")
const { connect } = require("./mongoDBConfig/mongoClient")
const coursesRouter = require("./routes/coursesRouter")
const reviewsRouter = require("./routes/reviewsRouter")
const videosRouter = require("./routes/videosRouter")
const importantLinkRouter = require("./routes/ImportantLinkRouter")
const jwtRouter = require("./routes/jwtRouter")
const paymentRouter = require("./routes/paymentRouter")
const couponRouter = require("./routes/Cupon")
const couponsRouter = require("./routes/couponsRouter")
const adminRouter = require("./routes/adminRouter")
const modulesRouter = require("./routes/modulesRouter")
const faqRouter = require("./routes/faqRouter")
const workshopRouter = require("./routes/workshopRouter")
const consultationRouter = require("./routes/consultationRouter")
// const modulesRouter = require("./routes/modulesRouter")
const resourceRouter = require("./routes/resourceRouter")
const dwonloadLimitRouter = require("./routes/downloadLimitRouter")
const taskListNoteRouter = require("./routes/taskListNoteRouter")
const taskListRouter = require("./routes/taskListRouter")
const resultRouter = require("./routes/resultRouter")

const port = process.env.PORT || 5000;
const app = express();

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

        // modules route
        app.use("/batch-1", modulesRouter)

        // videos routes
        app.use("/videos", videosRouter)

        // important link routes
        app.use("/important-link", importantLinkRouter)

        // coupon API
        app.use("/coupon", couponRouter)

        app.use("/task-list", taskListRouter);
        // add task list note
        app.use("/task-list-note", taskListNoteRouter);
        // admin routes
        app.use("/admin", adminRouter)

        // JWT Verify
        app.use("/jwt", jwtRouter)

        // coupons routes
        app.use("/coupons", couponsRouter)

        // coupons routes
        app.use("/modules", modulesRouter)

        // faq routes
        app.use("/faq", faqRouter)

        // workshops routes
        app.use("/workshops", workshopRouter)

        // workshops routes
        app.use("/consultation", consultationRouter)

        // resource routes
        app.use("/resource", resourceRouter)

        app.use("/downLimit", dwonloadLimitRouter)

        app.use("/result", resultRouter)

    })
    .catch(err => console.log(err))

app.get("/", (req, res) => {
    res.send("Learn With Rakib server is running")
})

// app.get("*", (req, res) => {
//     res.send("404 : Not found")
// })

app.listen(port, () => console.log("Server: I am on 😁 - port:", port))