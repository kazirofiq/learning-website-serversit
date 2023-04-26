const multipart = require('connect-multiparty');
const { uploadVideo, getVideoStatus, getAVideo } = require('../controllers/videosController');

const videosRouter = require("express").Router()
const multipartMiddleware = multipart();

videosRouter.post("/", multipartMiddleware, uploadVideo)

videosRouter.get("/status/:id", getVideoStatus)

videosRouter.get("/:id", getAVideo)

module.exports = videosRouter