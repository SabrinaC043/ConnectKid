const jwt = require("jsonwebtoken");


const secret = "shh";
const expiration = "24h";

module.exports = {
    signToken: function(email) {
        const paylaod = email;
        return jwt.sign({data: paylaod}, secret, {expiresIn: expiration})
    }
}