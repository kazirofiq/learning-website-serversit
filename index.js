const express = require("express")
const cors = require("cors")
const userRouter = require("./routes/userRouter")
const { connect } = require("./mongoDBConfig/mongoClient")
const coursesRouter = require("./routes/coursesRouter")
const reviewsRouter = require("./routes/reviewsRouter")
const uploadRouter = require("./routes/uploadVdoRouter")
const jwtRouter = require("./routes/jwtRouter")

const port = process.env.PORT || 5000
const app = express()
// const connect = getConectedClient();

// middlewares
app.use(cors())
app.use(express.json())

connect()
    .then(() => {
        // users routes
        app.use("/users", userRouter)

        // courses routes
        app.use("/courses", coursesRouter)

        // reviews routes
        app.use("/reviews", reviewsRouter)

        // video upload to vdocipher routes
        app.use("/upload-video", uploadRouter)
        
        // JWT Verify
        app.use("/jwt",jwtRouter)
    })
    .catch(err => console.log(err))

app.get("/", (req, res) => {
    res.send("Learn With Rakib server is running")
})

// app.get("*", (req, res) => {
//     res.send("404 : Not found")
// })

app.listen(port, () => console.log("Server: I am on 😁 - port:", port))