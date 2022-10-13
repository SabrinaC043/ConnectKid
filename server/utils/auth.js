const jwt = require("jsonwebtoken");


const secret = "shh";
const expiration = "24h";

module.exports = {
    signToken: function({currentParent: {email}, parent}) {
        const paylaod = email;
        return jwt.sign({data: paylaod}, secret, {expiresIn: expiration})
    }
}