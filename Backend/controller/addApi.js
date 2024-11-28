const jwt = require("jsonwebtoken"); // Import jwt
const User = require("../model/user"); // Import User model

const verifyToken = async (req, res) => {
    try {
        // Extract token from the request (assumed to be in headers or body)
        const { authToken } = req.body; // Or use req.headers.authorization if sent in headers

        if (!authToken) {
            return res
                .status(401)
                .json({ success: false, error: "No token provided" });
        }

        // Decode and verify the token
        const decoded = jwt.verify(authToken, process.env.JWT_SECRET);
        const userId = decoded.user.id; // Extract user ID from decoded token

        // Fetch user from the database
        const foundUser = await User.findOne({ _id: userId, status: "active" });

        if (!foundUser) {
            return res
                .status(404)
                .json({ success: false, error: "User not found or inactive" });
        }

        // Respond with user data and success
        return res.status(200).json({
            success: true,
            message: "Token Verified",
            user: foundUser,
            userRole: foundUser.type,
        });
    } catch (error) {
        console.error("Error verifying token:", error);

        if (error.name === "JsonWebTokenError") {
            return res
                .status(401)
                .json({ success: false, error: "Invalid token" });
        } else if (error.name === "TokenExpiredError") {
            return res
                .status(401)
                .json({ success: false, error: "Token expired" });
        }

        return res
            .status(500)
            .json({ success: false, error: "Internal server error" });
    }
};

module.exports = { verifyToken };
