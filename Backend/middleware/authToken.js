const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');
dotenv.config()

const checkAuth = async (req, res, next) => {

    const token = req.header('AuthToken');
    if (!token) {
        return res.status(401).send("Access denied token not received")
    }
    try {
        const data = jwt.verify(token, process.env.JWT_SECRET)
        req.user = data;
        next()
    } catch (error) {
        res.status(401).send({ success: false, error: "Access denied Invalid token" })
    }
}

module.exports = checkAuth