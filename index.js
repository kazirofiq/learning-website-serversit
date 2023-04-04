const express = require("express")
const cors = require("cors")
const router = require("./routes/userRouter")
const { connect } = require("./mongoDBConfig/mongoClient")

const port = process.env.PORT || 5000
const app = express()
// const connect = getConectedClient();

// middlewares
app.use(cors())
app.use(express.json())

connect()
    .then(() => {
        app.use("/users", router)
    })
    .catch(err => console.log(err))

app.get("/", (req, res) => {
    res.send("Learn With Rakib server is running")
})

// app.get("*", (req, res) => {
//     res.send("404 : Not found")
// })

app.listen(port, () => console.log("Server: I am on 😁 - port:", port))