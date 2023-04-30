const {getJWT} = require('../controllers/JWTController');
const jwtRouter = require("express").Router();


//get jwt token
jwtRouter.get('/', getJWT)

module.exports = jwtRouter