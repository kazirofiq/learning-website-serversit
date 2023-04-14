const fs = require("fs");
const request = require("request");
const multipart = require('connect-multiparty');
require("dotenv").config()

const uploadRouter = require("express").Router()
const multipartMiddleware = multipart();

uploadRouter.post("/", multipartMiddleware, (req, res) => {
    const get_credentials_options = {
        method: "PUT",
        url: "https://dev.vdocipher.com/api/videos",
        qs: { title: req.files.file.name, folderId: process.env.VDOCIPHER_FOLDER_ID },
        headers: { Authorization: `Apisecret ${process.env.VDOCIPHER_API_SECRET}` }
    };

    request(get_credentials_options, function (error, response, body) {
        if (error) throw new Error(error);

        const clientPayload = JSON.parse(body).clientPayload
        const videoId = JSON.parse(body).videoId

        const upload_options = {
            method: "POST",
            url: clientPayload["uploadLink"],
            headers: { "content-type": "multipart/form-data" },
            formData: {
                policy: clientPayload["policy"],
                key: clientPayload["key"],
                "x-amz-signature": clientPayload["x-amz-signature"],
                "x-amz-algorithm": clientPayload["x-amz-algorithm"],
                "x-amz-date": clientPayload["x-amz-date"],
                "x-amz-credential": clientPayload["x-amz-credential"],
                success_action_status: "201",
                success_action_redirect: "",
                file: {
                    value: fs.createReadStream(req.files.file.path),
                    options: { filename: req.files.file.path, contentType: null },
                },
            },
        };

        request(upload_options, function (error, response, body) {
            if (error) throw new Error(error);
            res.send({statusCode: response.statusCode, videoId});
        });
    });
});

module.exports = uploadRouter