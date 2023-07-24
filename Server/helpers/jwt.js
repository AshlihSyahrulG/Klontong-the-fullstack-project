const jwt = require('jsonwebtoken')
const SECRET = "hublaa"

function  generateToken(payload) {
    return jwt.sign(payload,SECRET)
}

function verifyToken(token){
    return jwt.verify(token,SECRET)
}

module.exports = {generateToken, verifyToken}