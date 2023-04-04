const user = (req, res) => {
    res.send("working")
}

const notfound = (req, res) => {
    res.send("404: Not found")
}

module.exports = {
    user,
    notfound
}