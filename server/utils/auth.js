const jwt = require("jsonwebtoken");


const secret = "shh";
const expiration = "24h";

module.exports = {
    signToken: function(info) {
        const payload = info;
        console.log(payload)
        return jwt.sign({data: payload}, secret, {expiresIn: expiration})
    }
}